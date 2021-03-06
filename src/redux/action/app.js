import {createAction} from '@reduxjs/toolkit';
import axios from 'axios';


// fetchAction  to server 
const fetchItemRequest = createAction('contacts/fetchRequest');
const fetchItemSuccess = createAction('contacts/fetchSuccess');
const fetchItemError = createAction('contacts/fetchError');


const fetchItems = () => dispatch => {
    dispatch(fetchItemRequest());
    axios
      .get('http://localhost:4000/contacts')
      .then(({data})=> dispatch(fetchItemSuccess(data)))
      .catch(error => dispatch(fetchItemError(error)))
}


export default {
  fetchItemRequest,
  fetchItemSuccess,
  fetchItemError,
  fetchItems,
};
