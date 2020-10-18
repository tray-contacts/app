import Auth from '../../apis/Auth';

export const Login = ({commit}) => {
    commit('generateLoginPayload');
    Auth.login()
        .then(response => commit('handleLoginResponse', response.data))
        .catch(e => commit('handleLoginErrors', e))
}


