import Auth from '../../apis/Auth';

const actions = {
    LOGIN_ACTION: ({commit}, email, password) => {
        console.log('from inside the login action', email, password)
    }
}

export default actions;




