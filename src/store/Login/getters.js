const getEmail = state => state.email;
const getPassword = state => state.password;
const getLogginIn = state => state.loggingIn;
const getLoginError = state => state.loginError;
const getLoginSuccessful = state => state.loginSuccessful;

export default {
    getEmail,
    getPassword,
    getLogginIn,
    getLoginError,
    getLoginSuccessful,
}
