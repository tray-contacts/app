import Api from './Api';

export default {
    login(loginPayload) {
        return Api.post('auth/login', loginPayload);
    }

    logout() {
        return Api.post('auth/logout');
    }

    refresh() {
        return Api.post('auth/refresh');
    }

    me(){
        return Api.get('auth/me');
    }

}
