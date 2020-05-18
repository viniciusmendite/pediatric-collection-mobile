import React from 'react';

import ArrowRight from '../../assets/right-arrow.png';
import {
  Container,
  HeaderText,
  AreaList,
  CardRegister,
  Details,
  DefaultNameText,
  DefaultText,
  AreaLottie,
  ArrowImage,
} from './styles';

export default () => {
  return (
    <Container>
      <HeaderText>Registros</HeaderText>

      <AreaList>
        <CardRegister>
          <Details>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Paciente: </DefaultText>
              jose da silva
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Responsável: </DefaultText>
              alberto
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Médico: </DefaultText>
              doutor silva
            </DefaultNameText>
          </Details>

          <AreaLottie>
            <ArrowImage source={ArrowRight} />
          </AreaLottie>
        </CardRegister>

        <CardRegister>
          <Details>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Paciente: </DefaultText>
              jose da silva
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Responsável: </DefaultText>
              alberto
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Médico: </DefaultText>
              doutor silva
            </DefaultNameText>
          </Details>

          <AreaLottie>
            <ArrowImage source={ArrowRight} />
          </AreaLottie>
        </CardRegister>

        <CardRegister>
          <Details>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Paciente: </DefaultText>
              jose da silva
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Responsável: </DefaultText>
              alberto
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Médico: </DefaultText>
              doutor silva
            </DefaultNameText>
          </Details>

          <AreaLottie>
            <ArrowImage source={ArrowRight} />
          </AreaLottie>
        </CardRegister>

        <CardRegister>
          <Details>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Paciente: </DefaultText>
              jose da silva
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Responsável: </DefaultText>
              alberto
            </DefaultNameText>
            <DefaultNameText numberOfLines={1}>
              <DefaultText>Médico: </DefaultText>
              doutor silva
            </DefaultNameText>
          </Details>

          <AreaLottie>
            <ArrowImage source={ArrowRight} />
          </AreaLottie>
        </CardRegister>
      </AreaList>
    </Container>
  );
};
