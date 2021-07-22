import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameProps, removeHasAddNewBet } from '../../store/slices/cartSlice';
import { useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import api from '../../services/api';

import { Header } from '../../components/UI/Header';
import { SubHeader } from '../../components/UI/SubHeader';
import { ContentScroll } from '../../components/UI/ContentScroll';
import { Game } from '../../components/Game';
import { ButtonFilter } from '../../components/ButtonFilter';
import { Snackbar } from '../../components/UI/Snackbar';

import { styles } from './styles';

type BetFromDatabaseProps = {
  balls: string;
  game: GameProps;
  id: number;
  updated_at: string;
};

type FilterProps = {
  title: string;
  color: string;
  id: number;
};

export const Home: React.FC = () => {
  const [refreshing] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [gamesStored, setGamesStored] = useState<BetFromDatabaseProps[]>([]);
  const [gamesFiltered, setGamesFiltered] = useState<BetFromDatabaseProps[]>(
    []
  );
  const [buttonsFilters, setButtonsFilters] = useState<JSX.Element[]>([]);
  const [filters, setFilters] = useState<string[]>([]);

  const hasAddNewBet = useAppSelector(state => state.cart.hasAddNewBet);

  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  let contentGame;
  let types: FilterProps[] = [];

  const convertDate = (date: string) => {
    const [separateDate] = date.split(' ');
    const [year, month, day] = separateDate.split('-');
    return format(new Date(`${year}-${month}-${+day + 1}`), 'dd/MM/yyyy');
  };

  const setListComponentsGames = (components: BetFromDatabaseProps[]) => {
    contentGame = components.map(game => (
      <Game
        id={game.id}
        key={game.id}
        typeGame={game.game.type}
        balls={game.balls}
        date={convertDate(game.updated_at)}
        price={game.game.price}
        color={game.game.color}
      />
    ));
  };

  if (filters.length > 0) {
    setListComponentsGames(gamesFiltered);
  } else if (gamesStored.length > 0) {
    setListComponentsGames(gamesStored);
  } else if (gamesStored.length === 0) {
    contentGame = (
      <Text style={styles.hasNoGame}>You don't have any games yet...</Text>
    );
  }

  const getBetsStored = async () => {
    try {
      const { data: bets } = await api.get('/bets');
      setGamesStored(bets);
    } catch (error) {
      const { message } = error.response.data;
      console.log(message);
    }
  };

  const getGameTypesToBeFilter = () => {
    gamesStored.forEach(game =>
      types.push({ title: game.game.type, color: game.game.color, id: game.id })
    );
    let clearDuplicateValues = new Map();
    types.forEach(type => {
      if (!clearDuplicateValues.has(type.title))
        clearDuplicateValues.set(type.title, type);
    });
    types = Array.from(clearDuplicateValues.values());
  };

  const handleFilters = (title: string) => {
    setFilters(prevsFilters => {
      if (prevsFilters.length === 0) return [title];
      else if (prevsFilters.length > 0) {
        if (prevsFilters.some(filter => title === filter)) {
          const withoutDuplicate = prevsFilters.filter(
            filter => filter !== title
          );
          return withoutDuplicate;
        } else {
          return [title, ...prevsFilters];
        }
      } else return [...prevsFilters];
    });
  };

  const setContentFilters = () => {
    const filtersType = types.map(type => (
      <ButtonFilter
        onPress={() => handleFilters(type.title)}
        key={type.id}
        color={type.color}
        title={type.title}
        selected={thisFilterIsSelected(type.title)}
        filter
      />
    ));
    setButtonsFilters(filtersType);
  };

  const thisFilterIsSelected = (title: string) => filters.includes(title);

  const handleRefresh = () => getBetsStored();

  useEffect(() => {
    if (isFocused) getBetsStored();
  }, [isFocused]);

  useEffect(() => {
    if (gamesStored.length > 0) {
      getGameTypesToBeFilter();
      setContentFilters();
    }
  }, [gamesStored, filters]);

  useEffect(() => {
    if (filters.length > 0) {
      setGamesFiltered([]);
      filters.forEach(filter => {
        const filtered = gamesStored.filter(game => game.game.type === filter);
        setGamesFiltered(prevFiltered => [...prevFiltered, ...filtered]);
      });
    }
  }, [filters]);

  useEffect(() => {
    if (hasAddNewBet) {
      setShowSnackbar(true);
      dispatch(removeHasAddNewBet());
    }
  }, [hasAddNewBet]);

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <Header />
      <Snackbar
        text='newBets'
        visible={showSnackbar}
        setVisible={setShowSnackbar}
        success
      />
      <View style={styles.container}>
        <SubHeader
          title='recent games'
          subtitle='filters'
          buttons={buttonsFilters.length > 1 ? buttonsFilters : []}
        />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          style={{ flex: 1 }}
        >
          <ContentScroll>{contentGame}</ContentScroll>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
