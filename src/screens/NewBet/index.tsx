import React, { useCallback, useEffect, useState } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  GameProps,
  selectBall,
  selectGame,
} from '../../store/slices/cartSlice';

import { Header } from '../../components/UI/Header';
import { AnimationCompleteGame } from '../../components/UI/AnimationCompleteGame';
import { SubHeader } from '../../components/UI/SubHeader';
import { ButtonFilter } from '../../components/ButtonFilter';
import { DescriptionGame } from '../../components/DescriptionGame';
import { Actions } from '../../components/Actions';
import { ContentScroll } from '../../components/UI/ContentScroll';
import { Snackbar } from '../../components/UI/Snackbar';
import { DialogModal } from '../../components/UI/DialogModal';
import Ball from '../../components/Ball';

import { styles } from './styles';

export const NewBet: React.FC<DrawerContentComponentProps> = ({
  navigation,
}) => {
  const [handleGame, setHandleGame] = useState<GameProps>();
  const [showModalDialog, setShowModalDialog] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const dispatch = useAppDispatch();

  const allGames = useAppSelector(state => state.cart.allGames);
  const game = useAppSelector(state => state.cart.selectedGame);
  const selectedBalls = useAppSelector(state => state.cart.selectedBalls);

  const rangeGameArray = game
    ? Array.from({ length: game.range }, (_, i) => i + 1)
    : [];

  const handleGameChoosen = useCallback(
    (game: GameProps) => {
      if (selectedBalls.length > 0) setShowModalDialog(true);
      else if (selectedBalls.length === 0) {
        dispatch(selectGame(game));
        setHandleGame(undefined);
      }
    },
    [selectedBalls]
  );

  const hasReachedLimit = () => game?.['max-number'] === selectedBalls.length;

  const handleDisableButtons = (num: number) => {
    if (hasReachedLimit()) {
      const isSelected = selectedBalls.includes(num);
      if (isSelected === false) return true;
    } else return false;
  };

  const handleBallsChoosen = useCallback((num: number) => {
    dispatch(selectBall(num));
  }, []);

  const handleOpenCart = () => navigation.openDrawer();

  useEffect(() => {
    if (handleGame !== undefined) handleGameChoosen(handleGame);
  }, [handleGame]);

  useEffect(() => {
    if (confirmModal && handleGame !== undefined) {
      dispatch(selectGame(handleGame));
      setConfirmModal(false);
    }
  }, [confirmModal, handleGame]);

  useEffect(() => {
    if (showModalDialog === false) setHandleGame(undefined);
  }, [showModalDialog]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showModalDialog && (
        <DialogModal
          btnText='Change'
          text='changeGame'
          visible={showModalDialog}
          setVisible={setShowModalDialog}
          setConfirm={setConfirmModal}
          danger
        />
      )}
      <Header handleOpenCart={handleOpenCart} />
      <View style={styles.container}>
        <Snackbar
          text='addCart'
          label='ok'
          visible={showSnackbar}
          setVisible={setShowSnackbar}
          success
        />
        <SubHeader
          title={`new bet for ${game?.type}`}
          subtitle='Choose a game'
          buttons={
            allGames.length > 0
              ? allGames.map(gameBtn => (
                  <ButtonFilter
                    key={gameBtn.id}
                    color={gameBtn.color}
                    title={gameBtn.type}
                    onPress={() => setHandleGame(gameBtn)}
                    selected={gameBtn.type === game?.type}
                  />
                ))
              : []
          }
        />
        {selectedBalls.length > 0 ? (
          <Actions
            color={game!.color}
            balls={selectedBalls}
            onAddToCart={setShowSnackbar}
          />
        ) : (
          <DescriptionGame description={game?.description} />
        )}
        <ContentScroll scroll={hasReachedLimit()}>
          <View style={styles.gameContent}>
            {rangeGameArray.length > 0 && !!game ? (
              <>
                {hasReachedLimit() && (
                  <View style={styles.limitReached}>
                    <AnimationCompleteGame />
                  </View>
                )}
                {rangeGameArray.map(ball => (
                  <Ball
                    key={ball}
                    number={String(ball)}
                    color={game.color}
                    handlerSelect={handleBallsChoosen}
                    disabled={handleDisableButtons(ball)}
                  />
                ))}
              </>
            ) : null}
          </View>
        </ContentScroll>
      </View>
    </SafeAreaView>
  );
};
