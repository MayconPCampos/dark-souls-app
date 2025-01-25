import React from 'react';
import Container from './components/Container/Container';
import Title from './components/title/Title';
import ArmorPage from './components/ArmorPage/ArmorPage';
import MainPage from './components/MainPage/MainPage';
import WeaponShieldPage from './components/WeaponShieldPage/WeaponShieldPage';

const App = () => {
  return (
    <>
      {/* <Title /> */}
      <Container>
        <MainPage />
        {/* <ArmorPage /> */}
        {/* <WeaponShieldPage /> */}
      </Container>
    </>
  );
};

export default App;
