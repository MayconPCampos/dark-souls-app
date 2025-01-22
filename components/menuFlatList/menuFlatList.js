import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import style from './style';

const MenuFlatList = () => {
  const menuList = [
    {
      itemName: 'Armor',
      itemImage: require('../../assets/images/menu-item.png'),
    },
    {
      itemName: 'Weapon',
      itemImage: require('../../assets/images/menu-item.png'),
    },

    {
      itemName: 'Shield',
      itemImage: require('../../assets/images/menu-item.png'),
    },

    {
      itemName: 'Ring',
      itemImage: require('../../assets/images/menu-item.png'),
    },
    {
      itemName: 'Spell',
      itemImage: require('../../assets/images/menu-item.png'),
    },
    {
      itemName: 'Key',
      itemImage: require('../../assets/images/menu-item.png'),
    },
    {
      itemName: 'Item',
      itemImage: require('../../assets/images/menu-item.png'),
    },
    {
      itemName: 'Upgrade',
      itemImage: require('../../assets/images/menu-item.png'),
    },
  ];

  return (
    <View style={style.container}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={menuList}
          renderItem={({item}) => (
            <View style={style.itemContainer}>
              <View style={style.imageContainer}></View>
              <Text style={style.itemTitle}>{item.itemName}</Text>
            </View>
          )}></FlatList>
      </View>
    </View>
  );
};

export default MenuFlatList;
