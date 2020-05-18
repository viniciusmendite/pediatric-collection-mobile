import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #76b1c4;
`;

export const HeaderText = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export const AreaList = styled.View`
  margin: 20px;
`;

export const Details = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const CardRegister = styled.View`
  flex-direction: row;
  background: #fff;
  padding: 10px;
  border-radius: 6px;
  border: 1.5px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 8px;
`;

export const DefaultText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #76b1c4;
  line-height: 24px;
`;

export const DefaultNameText = styled.Text`
  font-size: 14px;
  color: #9fabad;
  text-transform: capitalize;
`;

export const AreaLottie = styled.View`
  width: 30px;
  margin-left: 10px;
  justify-content: center;
`;

export const ArrowImage = styled.Image`
  width: 20px;
  height: 20px;
`;
