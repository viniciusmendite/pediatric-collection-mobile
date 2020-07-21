import React, {useState, useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import RegisterItem from '../RegisterItem';
import api from '../../services/api';

import empty from '../../assets/lottie/empty.json';

import {
  Container,
  HeaderText,
  ItemList,
  Loading,
  AreaLottie,
  TextEmpty,
} from './styles';

export default () => {
  const [registers, setRegisters] = useState([]);
  const [registerInfo, setRegisterInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  let page = 1;

  const loadRegisters = async () => {
    setLoading(true);
    const response = await api.get(`consultation?page=${page}`);

    const {docs, ...info} = response.data;
    setRegisters([...registers, ...docs]);
    setRegisterInfo(info);
    setLoading(false);
  };

  useEffect(() => {
    loadRegisters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMore = () => {
    if (registers.length === registerInfo.total) {
      return;
    }

    page++;
    loadRegisters();
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#76b1c4" />
      <HeaderText>Registros</HeaderText>
      {registerInfo.total === 0 && (
        <AreaLottie>
          <Lottie
            style={styles.lottie}
            resizeMode="contain"
            autoSize
            source={empty}
            autoPlay
            loop={false}
            speed={1}
          />

          <TextEmpty>Nenhum registro encontrado</TextEmpty>
        </AreaLottie>
      )}
      <ItemList
        data={registers}
        keyExtractor={item => String(item._id)}
        renderItem={({item}) => <RegisterItem data={item} />}
        showsVerticalScrollIndicator={true}
        ListFooterComponent={loading && <Loading />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
});
