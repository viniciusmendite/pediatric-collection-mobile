import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #76b1c4;
`;

export const AreaLottie = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const AreaRegister = styled.ScrollView`
  padding: 20px;
`;

export const AreaPatient = styled.View``;

export const InfoTitle = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-bottom: 10px;
`;

export const NameInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 10px;
  font-size: 15px;
  color: #ddd;
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DataInput = styled.TextInput`
  height: 40px;
  width: 48%;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 10px;
  font-size: 15px;
  color: #ddd;
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const AreaContact = styled.View`
  margin-top: 10px;
`;
