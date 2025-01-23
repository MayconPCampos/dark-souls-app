import React from 'react';
import {View} from 'react-native';
import Container from './components/Container/Container';
import ItemMenu from './components/ItemMenu/ItemMenu';
import SearchBar from './components/searchBar/SearchBar';
import Title from './components/title/Title';
import ItemDetailSection from './components/ItemDetailSection/ItemDetailSection';

const App = () => {
  return (
    <View>
      {/* <Title /> */}
      <Container>
        <SearchBar />
        {/* <ItemMenu /> */}
        <ItemDetailSection />
      </Container>
    </View>
  );
};

export default App;
