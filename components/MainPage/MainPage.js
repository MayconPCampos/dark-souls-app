import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import SearchBar from '../searchBar/SearchBar';
import style from './style';

const MainPage = () => {
  const itemList = [
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

  const itemListPageSize = 3;

  const [itemData, setItemData] = useState(itemList[0].itemList);

  //infinite scroll
  const [itemListCurrentPage, setItemListCurrentPage] = useState(1);
  const [itemListRenderedData, setItemListRenderedData] = useState([]);
  const [isloadingItemList, setIsLoadingItemList] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  const changeItem = item => {
    setItemData(item);
  };

  useEffect(() => {
    setIsLoadingItemList(true);
    const getInidialData = pagination(itemList, 1, itemListPageSize);
    setItemListRenderedData(getInidialData);
    setIsLoadingItemList(false);
  }, []);

  return (
    <>
      <SearchBar />
      <View style={style.container}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={itemList}
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
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isloadingItemList) return;
              setIsLoadingItemList(true);
              const contentToAppend = pagination(
                itemList,
                itemListCurrentPage + 1,
                itemListPageSize,
              );
              if (contentToAppend.length > 0) {
                setItemListCurrentPage(itemListCurrentPage + 1);
                setItemListRenderedData(prev => [...prev, ...contentToAppend]);
              }
              setIsLoadingItemList(true);
            }}
            style={style.itemList}
            showsVerticalScrollIndicator={false}
            data={itemData}
            renderItem={({item}) => (
              <View style={style.itemListContainer}>
                <Image source={item.image} />
                <Text style={style.itemListName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default MainPage;
