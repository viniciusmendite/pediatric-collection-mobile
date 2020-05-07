import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #76b1c4;
`;

export const AreaLottie = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  opacity: 0.9;
  text-align: center;
  margin-top: 20px;
`;

export const AreaButtons = styled.View`
  flex: 1;
  background: rgba(255, 255, 255, 0.3);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const ButtonNewRegister = styled.TouchableOpacity`
  background: #4f4f4f;
  padding: 10px;
  width: 200px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;
export const ButtonNewRegisterText = styled.Text`
  font-size: 17px;
  color: #fff;
  font-weight: bold;
`;

export const ButtonListRegister = styled.TouchableOpacity`
  background: #fff;
  padding: 10px;
  width: 200px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const ButtonListRegisterText = styled.Text`
  font-size: 17px;
  color: #3f3f3f;
  font-weight: bold;
`;
