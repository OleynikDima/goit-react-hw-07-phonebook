import React from 'react';
import style from '../Contacts/Contact.module.css';
import { CSSTransition } from 'react-transition-group';
import filterStyle from '../Contacts/transition/filter.module.css';


import {connect} from 'react-redux'
import filterAction from '../../redux/action/filter'
import selection from  '../../redux/selectors'


//Filter input for Contacts 
function ContactFilter ({value,onChangeFilter}){
    return (
        // не могу понять почему не работает CSSTransition
        <CSSTransition in={true} classNames={filterStyle}  timeout={250} unmountOnExit >
       
        <div className={style.filter}>
                <label  className={style.label}>
                    Find contacts by name 
                        <input className={style.input_cont} type="text"
                            value={value}
                            onChange={e => onChangeFilter(e.target.value)}
                        />
                </label>
            </div>
        </CSSTransition>
    )
}


const mapStateToProps = state => ({
    value:selection.getFilter(state)
})

const mapDispatchToProps = {
    onChangeFilter:filterAction
} 

export default connect(mapStateToProps,mapDispatchToProps)(ContactFilter);