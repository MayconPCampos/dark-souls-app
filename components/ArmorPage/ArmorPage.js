import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ItemImage from '../ItemImage/ItemImage';
import ContentText from '../ContentText/ContentText';
import style from './style';
import SearchBar from '../searchBar/SearchBar';
import ItemStatsFrame from '../ItemStatsFrame/ItemStatsFrame';

const ArmorPage = () => {
  const contentTitle = 'Description';
  const contentDescription =
    '"Helm of a nameless knight, perhaps an elite knight of Astora. Although he was loath to give up on his Undead mission, he perished at the Undead Asylum, and went Hollow."';

  const itemDataList = [
    {
      name: 'Physical Protection',
      iconImage: require('../../assets/images/item/icon-physical-protection.webp'),
      value: '36.3',
      id: 1,
    },
    {
      name: 'Strike Protection',
      iconImage: require('../../assets/images/item/icon-physical-protection.webp'),
      value: '35.2',
      id: 2,
    },
    {
      name: 'Slash Protection',
      iconImage: require('../../assets/images/item/icon-physical-protection.webp'),
      value: '42.1',
      id: 3,
    },
    {
      name: 'Thrust Protection',
      iconImage: require('../../assets/images/item/icon-physical-protection.webp'),
      value: '36.3',
      id: 4,
    },
  ];

  const item = {
    name: 'Elit Knight Helm',
    image: require('../../assets/images/item/knight_helm.png'),
  };

  return (
    <>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.itemDetailSectionContainer}>
          <View style={style.itemDetailFrame}>
            <ItemImage url={item.image} />
            <View>
              <Text style={style.itemDetailTitle}>{item.name}</Text>
            </View>

            {itemDataList.map(itemData => {
              if (itemData.id % 2 === 0) {
                return (
                  <ItemStatsFrame
                    key={itemData.id}
                    itemData={itemData}
                    darkBackground={true}
                  />
                );
              } else {
                return <ItemStatsFrame key={itemData.id} itemData={itemData} />;
              }
            })}
          </View>
          <ContentText
            italic={true}
            contentTitle={contentTitle}
            contentDescription={contentDescription}
          />
          <ContentText
            contentTitle={contentTitle}
            contentDescription={contentDescription}
          />
          <ContentText
            contentTitle={contentTitle}
            contentDescription={contentDescription}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ArmorPage;
