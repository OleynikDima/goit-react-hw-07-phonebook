import {createAction} from '@reduxjs/toolkit';
import axios from 'axios'



const addItemRequest = createAction('contacts/addRequest');
const addItemSuccess = createAction('contacts/addSuccess');
const addItemError = createAction('contacts/addError');



const addTask = ({text,number}) => dispatch => {
    dispatch(addItemRequest());

    axios.post('http://localhost:4000/contacts', {text,number})
    .then(res => {
        console.log(res.data)
        dispatch(addItemSuccess(res.data));
    })
    .catch(error => dispatch(addItemError(error)));
}


export default {
    addItemRequest,
    addItemSuccess,
    addItemError,
    addTask
};