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

export const ItemList = styled.FlatList`
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: 'rgba(255,255,255, 0.7)',
})`
  margin-bottom: 5px;
`;

export const AreaLottie = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TextEmpty = styled.Text`
  text-transform: uppercase;
  font-size: 16px;
  color: #f0f0f5;
  font-weight: bold;
`;
