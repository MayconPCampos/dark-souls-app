import React from 'react';
import {View, Image} from 'react-native';
import style from './style';

const ItemImage = () => {
  return (
    <View style={style.ContainerOutline}>
      <View style={style.imageItemContainer}>
        <Image
          style={style.itemImage}
          source={require('../../assets/images/item/knight_helm.png')}
        />
      </View>
    </View>
  );
};

export default ItemImage;
