import React, { useRef } from 'react';
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

import { styles } from './styles';

type ContentScrollProps = {
  scroll?: boolean;
};

export const ContentScroll: React.FC<ContentScrollProps> = ({
  children,
  scroll,
}) => {
  const refScroll = useRef<ScrollView>(null);

  useEffect(() => {
    if (scroll) refScroll.current?.scrollTo({ y: 0, animated: true });
  }, [scroll]);

  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      ref={refScroll}
      scrollEnabled={!scroll}
    >
      <View style={styles.scroll}>{children}</View>
    </ScrollView>
  );
};
