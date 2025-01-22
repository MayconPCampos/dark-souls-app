import React from 'react';
import {TextInput} from 'react-native';
import style from './styles';

const SearchBar = () => {
  return (
    <TextInput style={style.searchBarContainer} value={'Search'}></TextInput>
  );
};

export default SearchBar;
