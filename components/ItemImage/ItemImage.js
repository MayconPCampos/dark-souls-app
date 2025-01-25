import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const ItemImage = props => {
  return (
    <View style={style.ContainerOutline}>
      <View style={style.imageItemContainer}>
        <Image style={style.itemImage} source={props.url} />
      </View>
    </View>
  );
};

export default ItemImage;
