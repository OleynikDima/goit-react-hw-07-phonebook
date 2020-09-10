import taskReducer from './reducer/taskReducer'
import {configureStore } from '@reduxjs/toolkit';


const store = configureStore({
        reducer:{     
           contacts:taskReducer,
        },
});

export default store;