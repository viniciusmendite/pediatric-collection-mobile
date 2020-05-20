import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  CardRegister,
  DefaultNameText,
  DefaultText,
  InfoTitle,
  AreaRow,
  Area1,
  Area2,
  ButtonDelete,
  ButtonDeleteText,
} from './styles';

export default () => {
  const route = useRoute();
  const navigation = useNavigation();

  const register = route.params.register;

  const handleDelete = async id => {
    await api.delete(`consultation/${id}`);
    navigation.navigate('Home');
  };
  return (
    <Container>
      <CardRegister>
        <InfoTitle>Informações do paciente</InfoTitle>
        <DefaultNameText>
          <DefaultText>Paciente: </DefaultText>
          {register.patient}
        </DefaultNameText>

        <DefaultNameText>
          <DefaultText>Responsável: </DefaultText>
          {register.responsible}
        </DefaultNameText>

        <AreaRow>
          <Area1>
            <DefaultNameText>
              <DefaultText>Pulso: </DefaultText>
              {register.pulse} bpm
            </DefaultNameText>

            <DefaultNameText>
              <DefaultText>Saturação: </DefaultText>
              {register.saturation} %
            </DefaultNameText>
          </Area1>

          <Area2>
            <DefaultNameText>
              <DefaultText>Respiração: </DefaultText>
              {register.respiration} mrm
            </DefaultNameText>

            <DefaultNameText>
              <DefaultText>Pressão: </DefaultText>
              {register.pressure}
            </DefaultNameText>
          </Area2>
        </AreaRow>

        <InfoTitle>Informações de contato</InfoTitle>
        <DefaultNameText>
          <DefaultText>Endereço: </DefaultText>
          {register.address}
        </DefaultNameText>

        <DefaultNameText>
          <DefaultText>Bairro: </DefaultText>
          {register.neighborhood}
        </DefaultNameText>

        <DefaultNameText>
          <DefaultText>Cidade: </DefaultText>
          {register.city}
        </DefaultNameText>

        <DefaultNameText>
          <DefaultText>Telefone: </DefaultText>
          {register.telephone}
        </DefaultNameText>

        <InfoTitle>Informações locais</InfoTitle>
        <DefaultNameText>
          <DefaultText>Médico: </DefaultText>
          {register.medic}
        </DefaultNameText>

        <AreaRow>
          <Area1>
            <DefaultNameText>
              <DefaultText>Data: </DefaultText>
              {register.date}
            </DefaultNameText>
          </Area1>

          <Area2>
            <DefaultNameText>
              <DefaultText>Horário: </DefaultText>
              {register.hour}
            </DefaultNameText>
          </Area2>
        </AreaRow>
      </CardRegister>

      <ButtonDelete
        onPress={() => {
          handleDelete(register._id);
        }}>
        <ButtonDeleteText>Excluir</ButtonDeleteText>
      </ButtonDelete>
    </Container>
  );
};
