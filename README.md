# POC APPTESTFIREBASE

## SALVAR DADOS NO FIREBASE

`Crear projeto react native`

```
npx react-native init nomeDoProjeto
```

`Iniciar conexão com Firebase`

```
npm install firebase
```

- Criar um projeto pela interface do firebase
- Criar um arquivo dentro de services
- Copiar código de conexão dentro do seu projeto

```javaScript
exemplo;

// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
```

- insira o código dentro do seu componente

```javaScript

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

```

# Integraçao do Facebook ao React Native

`Dependência`

```
npm install react-native-fbsdk
```

- É preciso inserir o ID do provedor e a secret do app para ativar a autenticação do facebook dentro do firebase.
