import React from 'react';
import {View} from 'react-native';
import Container from './components/container/container';
import MenuFlatList from './components/menuFlatList/menuFlatList';
import SearchBar from './components/searchBar/searchBar';
import Title from './components/title/Title';

const App = () => {
  return (
    <View>
      <Title />
      <Container>
        <SearchBar />
        <MenuFlatList />
      </Container>
    </View>
  );
};

export default App;
