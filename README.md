# Tray-Contacts 

Um aplicativo em VueJS utilizando Vuetify, Vuex, VueRouter e Axios para 
as chamadas de API.

## Considerações finais.
Decidi separar a aplicação da API em repositórios diferentes devido a organização e também
devido ao desejo de entender a estrutura da framework e transformar a experiência em um aprendizado.
Passei a maior parte do meu tempo escrevendo a [API](https://github.com/tray-contacts/api) deste projeto
logo quando se trata da aplicação podemos dizer que foi um pouco prejudicada devida ao tempo.
Levando em conta que não tive nenhuma experiência prévia com VueJS, diria que consegui aplicar 
os conceitos de forma tranquila.


## Instalação 
Instale as dependências do projeto.
```
npm install
```

Configure o endpoint da api no arquivo `app/src/apis/Api.js`
```javascript
    import axios from 'axios';

    export default axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
    });
```

Rode o servidor.
```
npm run serve
```

## Informações de login predefinidas.

+ Leonardo
    Login: tray@tray.net.br
    senha: tray

