import React, {useState} from 'react';
import {
  ContainerLogin,
  Content,
  Form,
  Input,
  Button,
  TextButton,
} from './styles';

import firebase from '../../services/connectionFirebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    const user = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user.user);
      })
      .catch(error => {
        console.log(error);
        alert('Algo deu errado, tente novamente');
      });
  }

  return (
    <ContainerLogin>
      <Content>Cadastro</Content>
      <Form style={{marginHorizontal: 50}}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </Form>
      <Button style={{marginHorizontal: 150}} onPress={handleLogin}>
        <TextButton>Cadastrar</TextButton>
      </Button>
    </ContainerLogin>
  );
}
