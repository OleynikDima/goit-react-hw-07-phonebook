import {createAction} from '@reduxjs/toolkit';
import axios from 'axios';

// delete contact from list 
const removeItemRequest = createAction('contacts/removeRequest');
const removeItemSuccess = createAction('contacts/removeSuccess');
const removeItemError = createAction('contacts/removeError');


const removeItem = id => dispatch => {
    dispatch(removeItemRequest());

    axios
      .delete(`http://localhost:4000/contacts/${id}`)
      .then(()=> dispatch(removeItemSuccess(id)))
      .catch(error => dispatch(removeItemError(error)))
}


export default {
  removeItemRequest,
  removeItemSuccess,
  removeItemError,
  removeItem
};

