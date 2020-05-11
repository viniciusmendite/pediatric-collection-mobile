import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import medic from '../../assets/lottie/medic.json';

import {
  Container,
  AreaLottie,
  Title,
  AreaButtons,
  ButtonNewRegister,
  ButtonNewRegisterText,
  ButtonListRegister,
  ButtonListRegisterText,
} from './styles';

export default () => {
  const navigation = useNavigation();

  const navigateForNewRegister = () => {
    navigation.navigate('NewRegister');
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#76b1c4" />
      <AreaLottie>
        <Lottie
          style={styles.lottie}
          resizeMode="contain"
          autoSize
          source={medic}
          autoPlay
          loop
          speed={1}
        />
        <Title>Pediatric Collection</Title>
      </AreaLottie>

      <AreaButtons>
        <ButtonNewRegister onPress={navigateForNewRegister}>
          <ButtonNewRegisterText>Novo Registro</ButtonNewRegisterText>
        </ButtonNewRegister>

        <ButtonListRegister>
          <ButtonListRegisterText>Listar Registros</ButtonListRegisterText>
        </ButtonListRegister>
      </AreaButtons>
    </Container>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
});
