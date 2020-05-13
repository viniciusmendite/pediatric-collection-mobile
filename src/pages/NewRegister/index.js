import React, {useState} from 'react';
import {StatusBar, StyleSheet, Animated} from 'react-native';
import Lottie from 'lottie-react-native';
import TextInputMask from 'react-native-text-input-mask';

import api from '../../services/api';

import register from '../../assets/lottie/register.json';
import medic from '../../assets/lottie/medic.json';
import dnaLoading from '../../assets/lottie/loading-paperplane.json';

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
  LoadingArea,
  LoadingText,
  WarnBox,
  WarnBoxText,
} from './styles';

export default () => {
  const [loading, setLoading] = useState(false);
  const [endLoading, setEndLoading] = useState(false);

  const [patient, setPatient] = useState('');
  const [responsible, setResponsible] = useState('');
  const [pulse, setPulse] = useState('');
  const [saturation, setSaturation] = useState('');
  const [respiration, setRespiration] = useState('');
  const [pressure, setPressure] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [telephone, setTelephone] = useState('');
  const [medicName, setMedicName] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const warnHeight = new Animated.Value(0);

  const handleSendNewRegister = async () => {
    const data = {
      patient,
      responsible,
      pulse,
      saturation,
      respiration,
      pressure,
      address,
      neighborhood,
      city,
      telephone,
      medic: medicName,
      date,
      hour,
    };

    try {
      setLoading(true);
      await api.post('consultation', data);
      setLoading(false);
      setEndLoading(true);
      setTimeout(() => {
        setEndLoading(false);
      }, 3300);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setEndLoading(false);
    }
  };

  const handleWarning = () => {
    Animated.sequence([
      Animated.timing(warnHeight, {
        toValue: 40,
        duration: 800,
        useNativeDriver: false,
      }),
      Animated.delay(2000),
      Animated.timing(warnHeight, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };
  return (
    <Container scrollEnabled={loading ? false : true}>
      <StatusBar barStyle="light-content" backgroundColor="#76b1c4" />

      <AreaLottie>
        <Lottie
          style={styles.lottie}
          resizeMode="contain"
          autoSize
          source={register}
          autoPlay={loading ? false : true}
          loop={loading ? false : true}
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
            value={patient}
            onChangeText={t => setPatient(t)}
          />
          <DefaultInput
            placeholder="Responsável"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
            value={responsible}
            onChangeText={t => setResponsible(t)}
          />

          <AreaRow>
            <DataInput
              placeholder="Pulso"
              placeholderTextColor="#ddd"
              keyboardType="phone-pad"
              value={pulse}
              onChangeText={t => setPulse(t)}
            />
            <DataInput
              placeholder="Saturação"
              placeholderTextColor="#ddd"
              keyboardType="phone-pad"
              value={saturation}
              onChangeText={t => setSaturation(t)}
            />
          </AreaRow>

          <AreaRow>
            <DataInput
              placeholder="Respiração"
              placeholderTextColor="#ddd"
              keyboardType="phone-pad"
              value={respiration}
              onChangeText={t => setRespiration(t)}
            />
            <DataInput
              placeholder="Pressão"
              placeholderTextColor="#ddd"
              keyboardType="phone-pad"
              value={pressure}
              onChangeText={t => setPressure(t)}
            />
          </AreaRow>
        </AreaPatient>

        <AreaContact>
          <InfoTitle>Informações de contato</InfoTitle>
          <DefaultInput
            placeholder="Endereço + num"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
            value={address}
            onChangeText={t => setAddress(t)}
          />

          <AreaRow>
            <DataInput
              placeholder="Bairro"
              placeholderTextColor="#ddd"
              autoCapitalize="words"
              value={neighborhood}
              onChangeText={t => setNeighborhood(t)}
            />
            <DataInput
              placeholder="Cidade"
              placeholderTextColor="#ddd"
              autoCapitalize="words"
              value={city}
              onChangeText={t => setCity(t)}
            />
          </AreaRow>

          <TextInputMask
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="#ddd"
            keyboardType="numeric"
            autoCorrect={false}
            mask={'([00]) [00000] - [0000]'}
            value={telephone}
            onChangeText={(formatted, extracted) => {
              setTelephone(formatted);
            }}
          />
        </AreaContact>

        <AreaClinic>
          <InfoTitle>Informações locais</InfoTitle>
          <DefaultInput
            placeholder="Médico"
            placeholderTextColor="#ddd"
            autoCapitalize="words"
            value={medicName}
            onChangeText={t => setMedicName(t)}
          />

          <AreaRow>
            <TextInputMask
              style={styles.dataInput}
              placeholder="Data"
              placeholderTextColor="#ddd"
              keyboardType="numeric"
              autoCorrect={false}
              mask={'[00]/[00]/[0000]'}
              value={date}
              onChangeText={(formatted, extracted) => {
                setDate(formatted);
              }}
            />
            <TextInputMask
              style={styles.dataInput}
              placeholder="Hora"
              placeholderTextColor="#ddd"
              keyboardType="numeric"
              autoCorrect={false}
              mask={'[00]:[00]'}
              value={hour}
              onChangeText={(formatted, extracted) => {
                setHour(formatted);
              }}
            />
          </AreaRow>
        </AreaClinic>

        <AreaButton>
          <ButtonSend onPress={handleSendNewRegister}>
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

      {loading === true && (
        <LoadingArea>
          <Lottie
            style={styles.lottieLoading}
            resizeMode="contain"
            autoSize
            source={dnaLoading}
            autoPlay
            loop
            speed={1}
          />
          <LoadingText>ENVIANDO DADOS...</LoadingText>
        </LoadingArea>
      )}

      <WarnBox style={{height: warnHeight}}>
        <WarnBoxText>Dados enviados com sucesso</WarnBoxText>
      </WarnBox>

      {endLoading && loading === false && handleWarning()}
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
  lottieLoading: {
    width: 200,
    height: 200,
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
