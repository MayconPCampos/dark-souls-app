import React from 'react';
import {SafeAreaView, View} from 'react-native';
import style from './style';

const Container = ({children}) => {
  return (
    <SafeAreaView>
      <View style={style.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;
