import React from 'react';
import {View, Text} from 'react-native';
import ItemImage from '../ItemImage/ItemImage';
import style from './style';

const ItemDetailSection = () => {
  return (
    <View style={style.itemDetailSectionContainer}>
      <ItemImage></ItemImage>
      <View>
        <Text style={style.itemDetailTitle}>Elit Knight Helm</Text>
      </View>
    </View>
  );
};

export default ItemDetailSection;
