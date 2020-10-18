import Auth from '../../Api/Auth';

export const Login = ({commit}) => {
    Auth.login()
        .then(response => commit('handleLoginPayload', response.data));
        .catch(e => commit('handleErrors', e))
}

