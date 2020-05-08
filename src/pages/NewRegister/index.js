import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import register from '../../assets/lottie/register.json';

import {
  Container,
  AreaLottie,
  Title,
  AreaRegister,
  AreaPatient,
  InfoTitle,
  NameInput,
  AreaInput,
  DataInput,
  AreaContact,
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
          source={register}
          autoPlay
          loop
          speed={1}
        />
        <Title>Cadastre seu paciente</Title>
      </AreaLottie>

      <AreaRegister>
        <AreaPatient>
          <InfoTitle>Dados do paciente</InfoTitle>
          <NameInput
            placeholder="Nome"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
          />
          <NameInput placeholder="Responsável" placeholderTextColor="#ddd" />

          <AreaInput>
            <DataInput placeholder="Pulso" placeholderTextColor="#ddd" />
            <DataInput placeholder="Saturação" placeholderTextColor="#ddd" />
          </AreaInput>

          <AreaInput>
            <DataInput placeholder="Respiração" placeholderTextColor="#ddd" />
            <DataInput placeholder="Pressão" placeholderTextColor="#ddd" />
          </AreaInput>
        </AreaPatient>

        <AreaContact>
          <InfoTitle>Infomações de contato</InfoTitle>
        </AreaContact>
      </AreaRegister>
    </Container>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
});
