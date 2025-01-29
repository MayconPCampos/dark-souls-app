import React, {useState, useEffect} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import SearchBar from '../searchBar/SearchBar';
import style from './style';

const MainPage = () => {
  const menuList = [
    {
      itemName: 'Armor',
      itemImage: require('../../assets/images/menu/knight_helm.png'),
      itemList: [
        {
          id: '01',
          name: 'Armor-01',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '02',
          name: 'Armor-02',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '03',
          name: 'Armor-03',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '04',
          name: 'Armor-04',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '05',
          name: 'Armor-05',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '06',
          name: 'Armor-06',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '07',
          name: 'Armor-07',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '08',
          name: 'Armor-08',
          image: require('../../assets/images/item/knight_helm.png'),
        },
        {
          id: '09',
          name: 'Armor-09',
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
          id: '01',
          name: 'Consumable-01',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          id: '02',
          name: 'Consumable-02',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          id: '03',
          name: 'Consumable-03',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          id: '04',
          name: 'Consumable-04',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          id: '05',
          name: 'Consumable-05',
          image: require('../../assets/images/item/2005.png'),
        },
        {
          id: '06',
          name: 'Consumabler-06',
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

  const [itemList, setItemData] = useState(menuList[0].itemList);

  //infinite scroll
  const [itemListCurrentPage, setItemListCurrentPage] = useState(1);
  const [itemListRenderedData, setItemListRenderedData] = useState([]);
  const [isloadingItemList, setIsLoadingItemList] = useState(false);
  const [isContentFirstTimeLoaded, setIsContentFirstTimeLoaded] =
    useState(false);

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
    setItemListCurrentPage(1);
  };

  useEffect(() => {
    setIsLoadingItemList(true);
    if (!isContentFirstTimeLoaded) {
      const getInidialData = pagination(itemList, 1, itemListPageSize);
      setItemListRenderedData(getInidialData);
    }
    setIsContentFirstTimeLoaded(false);
    setIsLoadingItemList(false);
  }, [itemList]);

  return (
    <>
      <SearchBar />
      <View style={style.container}>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={menuList}
            renderItem={({item}) => (
              <Pressable
                onPress={() => {
                  changeItem(item.itemList);
                }}>
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
              if (isloadingItemList) {
                return;
              }
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
              setIsLoadingItemList(false);
            }}
            style={style.itemList}
            showsVerticalScrollIndicator={false}
            data={itemListRenderedData}
            renderItem={({item}) => (
              <View
                key={item.id}
                style={[
                  style.itemListContainer,
                  {
                    borderTopWidth: item.id === '01' ? 0 : 1,
                  },
                ]}>
                <Image key={item.name} source={item.image} />
                <Text key={item.id + item.name} style={style.itemListName}>
                  {item.name}
                </Text>

                {console.log('rendering item name: ' + item.name)}
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
};

export default MainPage;
