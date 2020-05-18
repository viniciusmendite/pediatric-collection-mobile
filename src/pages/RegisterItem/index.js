import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ArrowRight from '../../assets/right-arrow.png';
import {
  CardRegister,
  Details,
  DefaultNameText,
  DefaultText,
  AreaButton,
  ArrowImage,
  Button,
} from './styles';

export default ({data}) => {
  const navigation = useNavigation();

  const navigateToDetail = register => {
    navigation.navigate('Details', {register});
  };

  return (
    <CardRegister>
      <Details>
        <DefaultNameText numberOfLines={1}>
          <DefaultText>Paciente: </DefaultText>
          {data.patient}
        </DefaultNameText>
        <DefaultNameText numberOfLines={1}>
          <DefaultText>Responsável: </DefaultText>
          {data.responsible}
        </DefaultNameText>
        <DefaultNameText numberOfLines={1}>
          <DefaultText>Médico: </DefaultText>
          {data.medic}
        </DefaultNameText>
      </Details>

      <AreaButton>
        <Button onPress={() => navigateToDetail(data)}>
          <ArrowImage source={ArrowRight} />
        </Button>
      </AreaButton>
    </CardRegister>
  );
};
