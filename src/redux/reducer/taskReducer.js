import {combineReducers} from 'redux';
import {createReducer} from '@reduxjs/toolkit'

import appAction from '../action/app'
import formAction from '../action/form'
import listAction from '../action/list'
import filterAction from '../action/filter'




const newItemObj = (state, action) => {
    return [...state, action.payload]
}
const onRemoveItem = (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
}
const changeFilter = (state,action) => {
    return action.payload;
}


const items = createReducer([],{
    [appAction.fetchItemSuccess]:(state,action) => action.payload,
    [formAction.addItemSuccess]: newItemObj,
    [listAction.removeItemSuccess]: onRemoveItem,
});

const filter = createReducer('', {
    [filterAction]:changeFilter
});


const loading = createReducer(false ,{
    [listAction.removeItemRequest]:()=> true,
    [listAction.removeItemSuccess]:()=> false,
    [listAction.removeItemError]:()=> false,

    [appAction.fetchItemRequest]:()=> true,
    [appAction.fetchItemSuccess]:()=> false,
    [appAction.fetchItemError]:()=> false,

    [formAction.addItemRequest]:()=> true,
    [formAction.addItemSuccess]:()=> false,
    [formAction.addItemError]:()=> false,
})


export default combineReducers({
    loading,
    items,
    filter,
})
