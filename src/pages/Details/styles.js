import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #76b1c4;
  padding: 10px;
`;

export const CardRegister = styled.View`
  background: #f0f0f5;
  padding: 10px;
  padding-bottom: 30px;
  border-radius: 4px;
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

export const InfoTitle = styled.Text`
  font-size: 16px;
  color: #7f7f7f;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #7f7f7f;
`;

export const AreaRow = styled.View`
  flex-direction: row;
`;

export const Area1 = styled.View`
  flex-direction: column;
  width: 48%;
`;

export const Area2 = styled.View`
  flex-direction: column;
  width: 48%;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #e02041;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border-radius: 4px;
`;

export const ButtonDeleteText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
