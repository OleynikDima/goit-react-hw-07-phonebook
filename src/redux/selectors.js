import {createSelector} from '@reduxjs/toolkit'

const getContactsItems = state => state.contacts.items;

const getContacts = state => state.contacts; 

const getIsLoadingBtn = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector([getContactsItems,getFilter],(items,filter)=>{
    return items.filter(contack => contack.text.toLowerCase().includes(filter))
});


export default {
    getContactsItems,
    getContacts,
    getIsLoadingBtn,
    getFilter,
    getVisibleContacts,
}