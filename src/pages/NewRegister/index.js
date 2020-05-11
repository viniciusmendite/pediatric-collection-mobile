import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
import TextInputMask from 'react-native-text-input-mask';

import register from '../../assets/lottie/register.json';
import medic from '../../assets/lottie/medic.json';

import {
  Container,
  AreaLottie,
  Title,
  AreaRegister,
  AreaPatient,
  InfoTitle,
  DefaultInput,
  DataInput,
  AreaContact,
  AreaRow,
  AreaClinic,
  AreaButton,
  ButtonSend,
  ButtonSendText,
  Footer,
  TitleFooter,
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
          <DefaultInput
            placeholder="Nome"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
          />
          <DefaultInput
            placeholder="Responsável"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
          />

          <AreaRow>
            <DataInput
              placeholder="Pulso"
              placeholderTextColor="#ddd"
              keyboardType="numeric"
            />
            <DataInput
              placeholder="Saturação"
              placeholderTextColor="#ddd"
              keyboardType="numeric"
            />
          </AreaRow>

          <AreaRow>
            <DataInput
              placeholder="Respiração"
              placeholderTextColor="#ddd"
              keyboardType="numeric"
            />
            <DataInput placeholder="Pressão" placeholderTextColor="#ddd" />
          </AreaRow>
        </AreaPatient>

        <AreaContact>
          <InfoTitle>Informações de contato</InfoTitle>
          <DefaultInput
            placeholder="Endereço + num"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
          />

          <AreaRow>
            <DataInput
              placeholder="Bairro"
              placeholderTextColor="#ddd"
              autoCapitalize="words"
            />
            <DataInput
              placeholder="Cidade"
              placeholderTextColor="#ddd"
              autoCapitalize="words"
            />
          </AreaRow>

          <TextInputMask
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="#ddd"
            keyboardType="numeric"
            autoCorrect={false}
            mask={'([00]) [00000]  [0000]'}
          />
        </AreaContact>

        <AreaClinic>
          <InfoTitle>Informações locais</InfoTitle>
          <DefaultInput
            placeholder="Médico"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
          />

          <AreaRow>
            <TextInputMask
              style={styles.dataInput}
              placeholder="Data"
              placeholderTextColor="#ddd"
              keyboardType="numeric"
              autoCorrect={false}
              mask={'[00]/[00]/[0000]'}
            />
            <TextInputMask
              style={styles.dataInput}
              placeholder="Hora"
              placeholderTextColor="#ddd"
              keyboardType="numeric"
              autoCorrect={false}
              mask={'[00]:[00]'}
            />
          </AreaRow>
        </AreaClinic>

        <AreaButton>
          <ButtonSend>
            <ButtonSendText>Cadastrar</ButtonSendText>
          </ButtonSend>
        </AreaButton>
      </AreaRegister>
      <Footer>
        <TitleFooter>Pediatric Collection</TitleFooter>
        <Lottie
          style={styles.lottieFooter}
          resizeMode="contain"
          autoSize
          source={medic}
        />
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  lottieFooter: {
    width: 40,
    height: 40,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    fontSize: 15,
    color: '#ddd',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  dataInput: {
    height: 40,
    width: '48%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    fontSize: 15,
    color: '#ddd',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
});
