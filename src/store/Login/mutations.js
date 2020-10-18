export const handleLoginResponse = (state, payload) => {
    state.loginSuccessful = true; 
    console.log('logged with success', payload);
}

export const handleLoginErrors = (state, errors) => {
    state.loginError = errors;
}

export const generateLoginPayload = (state) => {
    state.userObject = {
        "email": state.email,
        "password": state.password
    }
}
