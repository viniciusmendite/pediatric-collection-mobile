import styled from 'styled-components/native';

export const Details = styled.View`
  flex: 1;
  flex-direction: column;
`;
export const CardRegister = styled.View`
  flex-direction: row;
  background: #f0f0f5;
  padding: 10px;
  border-radius: 6px;
  border: 1.2px solid rgba(0, 0, 0, 0.3);
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
  color: #999;
  text-transform: capitalize;
`;

export const AreaButton = styled.View`
  width: 30px;
  margin-left: 10px;
  justify-content: center;
`;

export const ArrowImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Button = styled.TouchableOpacity``;
