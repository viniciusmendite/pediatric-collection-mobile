import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Lottie from 'lottie-react-native';

import mother from '../../assets/lottie/mother.json';

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
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#76b1c4" />

      <AreaLottie>
        <Lottie
          style={styles.lottie}
          resizeMode="contain"
          autoSize
          source={mother}
          autoPlay
          loop
          speed={1}
        />
        <Title>Pediatric Collection</Title>
      </AreaLottie>

      <AreaButtons>
        <ButtonNewRegister>
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
