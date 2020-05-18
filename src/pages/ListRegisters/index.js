import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';

import RegisterItem from '../RegisterItem';
import api from '../../services/api';

import {Container, HeaderText, ItemList} from './styles';

export default () => {
  const [registers, setRegisters] = useState([]);
  const [page, setPage] = useState(1);

  const loadRegisters = async () => {
    const response = await api.get('consultation?page=1');

    const {docs} = response.data;
    setRegisters(docs);
  };

  useEffect(() => {
    loadRegisters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#76b1c4" />
      <HeaderText>Registros</HeaderText>

      <ItemList
        data={registers}
        keyExtractor={item => String(item._id)}
        renderItem={({item}) => <RegisterItem data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
