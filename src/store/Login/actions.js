import Api from '../../Api/Api';

export const Login = ({commit}) => {
    Api.post('login')
        .then(response => commit('handleLoginPayload', response.data));
}

