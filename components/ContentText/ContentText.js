import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';

const contentDescriptionText = props => {
  return (
    <View style={style.contentTextContainer}>
      <View style={style.contentTextHead}>
        <Image
          style={style.contentImage}
          source={require('../../assets/images/bonfire.png')}
        />
        <Text style={style.contentTitle}>{props.contentTitle}:</Text>
      </View>
      <Text
        style={[
          style.contentText,
          {fontStyle: props.italic ? 'italic' : 'normal'},
        ]}>
        {props.contentDescription}
      </Text>
    </View>
  );
};

export default contentDescriptionText;
