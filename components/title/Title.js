import React from 'react';
import {Image} from 'react-native';
import style from './style';

const Title = () => {
  return (
    <Image
      style={style.titleImage}
      source={require('../../assets/images/ds-logo.jpg')}
    />
  );
};

export default Title;
