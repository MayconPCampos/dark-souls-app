import React from 'react';
import {TextInput} from 'react-native';
import style from './styles';

const SearchBar = () => {
  return (
    <TextInput
      style={style.searchBarContainer}
      placeholder={'Search'}
      placeholderTextColor={'#777'}></TextInput>
  );
};

export default SearchBar;
