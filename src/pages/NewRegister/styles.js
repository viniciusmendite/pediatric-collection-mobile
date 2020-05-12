import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
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

export const AreaRegister = styled.View`
  padding: 20px;
`;

export const AreaPatient = styled.View``;

export const InfoTitle = styled.Text`
  font-size: 17px;
  color: #fff;
  margin-bottom: 10px;
`;

export const DefaultInput = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 10px;
  font-size: 15px;
  color: #ddd;
  padding: 0 15px;
  margin-bottom: 10px;
`;

export const AreaRow = styled.View`
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

export const AreaClinic = styled.View`
  margin-top: 10px;
`;

export const AreaButton = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const ButtonSend = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-width: 1px;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border-color: #ddd;
`;
export const ButtonSendText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #ddd;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const TitleFooter = styled.Text`
  font-size: 11px;
  color: #fff;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.4);
  margin-right: 5px;
`;

export const LoadingArea = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  font-size: 18px;
  color: #8280e1;
  font-weight: bold;
`;
