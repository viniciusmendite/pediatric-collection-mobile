import React from 'react';

import ArrowRight from '../../assets/right-arrow.png';
import {
  CardRegister,
  Details,
  DefaultNameText,
  DefaultText,
  AreaButton,
  ArrowImage,
} from './styles';

export default ({data}) => {
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
        <ArrowImage source={ArrowRight} />
      </AreaButton>
    </CardRegister>
  );
};
