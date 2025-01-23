import React, {useState} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import style from './style';

const ItemMenu = () => {
  const menuList = [
    {
      itemName: 'Armor',
      itemImage: require('../../assets/images/menu/knight_helm.png'),
      itemList: [
        {
          name: 'Armor 01',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          name: 'Armor 01',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          name: 'Armor 01',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          name: 'Armor 01',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          name: 'Armor 01',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          name: 'Armor 01',
          image: require('../../assets/images/item/knight_helm.png'),
        },
      ],
    },
    {
      itemName: 'Weapon',
      itemImage: require('../../assets/images/menu/Longsword.webp'),
    },

    {
      itemName: 'Shield',
      itemImage: require('../../assets/images/menu/sunlight_shield.webp'),
    },
    {
      itemName: 'Consumables',
      itemImage: require('../../assets/images/menu/2005.png'),
      itemList: [
        {
          name: 'Consumable 01',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          name: 'Consumable 01',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          name: 'Consumable 01',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          name: 'Consumable 01',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          name: 'Consumable 01',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          name: 'Consumabler 01',
          image: require('../../assets/images/item/2005.png'),
        },
      ],
    },

    {
      itemName: 'Ring',
      itemImage: require('../../assets/images/menu/4011.webp'),
    },
    {
      itemName: 'Spell',
      itemImage: require('../../assets/images/menu/Heal.webp'),
    },
    {
      itemName: 'Keys',
      itemImage: require('../../assets/images/menu/2142.png'),
    },
    {
      itemName: 'Embers',
      itemImage: require('../../assets/images/menu/2109.webp'),
    },
    {
      itemName: 'Ammunition',
      itemImage: require('../../assets/images/menu/heavy_bolt.webp'),
    },
    {
      itemName: 'Ore',
      itemImage: require('../../assets/images/menu/2097.png'),
    },
    {
      itemName: 'Souls',
      itemImage: require('../../assets/images/menu/2051.webp'),
    },
    {
      itemName: 'Tools',
      itemImage: require('../../assets/images/menu/2043.png'),
    },
    {
      itemName: 'Bonfire',
      itemImage: require('../../assets/images/menu/2063.webp'),
    },
    {
      itemName: 'Multiplayer',
      itemImage: require('../../assets/images/menu/2082.png'),
    },
    {
      itemName: 'Projectiles',
      itemImage: require('../../assets/images/menu/2023.png'),
    },
    {
      itemName: 'Unequippable',
      itemImage: require('../../assets/images/menu/2037.png'),
    },
  ];

  const [itemData, setItemData] = useState(menuList[0].itemList);

  const changeItem = item => {
    setItemData(item);
  };

  return (
    <View style={style.container}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={menuList}
          renderItem={({item}) => (
            <Pressable onPress={() => changeItem(item.itemList)}>
              <View style={style.itemContainer}>
                <View style={style.itemImageBorder}>
                  <View style={style.imageContainer}>
                    <Image source={item.itemImage} style={style.image} />
                  </View>
                </View>
                <Text style={style.itemTitle}>{item.itemName}</Text>
              </View>
            </Pressable>
          )}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={itemData}
          renderItem={({item}) => (
            <View style={style.itemListContainer}>
              <Image source={item.image} />
              <Text style={style.itemListName}>{item.name}</Text>
              <Text style={style.itemListName}></Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default ItemMenu;
