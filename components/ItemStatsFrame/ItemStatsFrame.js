import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';

const ItemStatsFrame = props => {
  return (
    <View style={style.frameContainer}>
      <View
        style={[
          style.statNameContainer,
          {backgroundColor: props.darkBackground ? '#111' : '#222'},
        ]}>
        <Text style={style.statName}>{props.itemData.name}</Text>
      </View>
      <View
        style={[
          style.statImageContainer,
          {backgroundColor: props.darkBackground ? '#111' : '#222'},
        ]}>
        <Image style={style.statImage} source={props.itemData.iconImage} />
      </View>
      <View
        style={[
          style.statValueContainer,
          {backgroundColor: props.darkBackground ? '#111' : '#222'},
        ]}>
        <Text style={style.statValue}>{props.itemData.value}</Text>
      </View>
    </View>
  );
};

export default ItemStatsFrame;
