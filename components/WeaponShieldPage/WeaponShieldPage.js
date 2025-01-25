import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import ItemImage from '../ItemImage/ItemImage';
import ContentText from '../ContentText/ContentText';
import style from './style';
import SearchBar from '../searchBar/SearchBar';
import ItemStatsFrame from '../ItemStatsFrame/ItemStatsFrame';

const WeaponShieldPage = () => {
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

  const itemInformationList = [
    {id: 1, title: 'Weapon Type', information: 'Greatsword'},
    {id: 2, title: 'Atack Type', information: 'Regular / Thrust'},
    {id: 3, title: 'Enchantable', information: 'Yes'},
    {id: 4, title: 'Special', information: 'No'},
  ];

  const item = {
    name: 'Longsword',
    image: require('../../assets/images/item/Longsword.webp'),
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

            {itemDataList.map(data => {
              if (data.id % 2 === 0) {
                return (
                  <ItemStatsFrame
                    key={data.id}
                    itemData={data}
                    darkBackground={true}
                  />
                );
              } else {
                return <ItemStatsFrame key={data.id} itemData={data} />;
              }
            })}
          </View>
          <View style={style.itemInformationContainer}>
            {itemInformationList.map(data => {
              return (
                <View key={data.id} style={style.itemInformation}>
                  <Text
                    key={data.information}
                    style={style.itemInformationName}>
                    {data.title}:
                  </Text>
                  <Text
                    key={data.title}
                    style={style.itemInformationDescription}>
                    {data.information}
                  </Text>
                </View>
              );
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

export default WeaponShieldPage;
