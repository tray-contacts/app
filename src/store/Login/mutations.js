export const handleLoginPayload(state, payload) => {
    state.loginSuccessful = true; 
    console.log('logged with success', payload);
}

export const handleErrors(state, errors) => {
    state.loginError = errors;
}
