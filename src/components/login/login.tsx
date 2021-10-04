import React, {useState} from 'react';
import {
  ContainerLogin,
  Content,
  Form,
  Input,
  Button,
  TextButton,
  ButtonLogin,
} from './styles';

import firebase from '../../services/connectionFirebase';

import {LoginButton, AccessToken} from 'react-native-fbsdk';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import auth from '@react-native-firebase/auth';

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

  GoogleSignin.configure({
    webClientId: '',
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
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
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
      </Form>
      <Button style={{marginHorizontal: 150}} onPress={handleLogin}>
        <TextButton>Cadastrar</TextButton>
      </Button>

      <ButtonLogin>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </ButtonLogin>

      <ButtonLogin>
        <LoginButton
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        />
      </ButtonLogin>
    </ContainerLogin>
  );
}
