import React from 'react';
import PropsTypes from 'prop-types';
import style from './Contact.module.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import popItem from './transition/pop.module.css'


// add redux connect 
import {connect} from 'react-redux'
import listAction from '../../redux/action/list'
import selector  from '../../redux/selectors'


// func create list item 

const Contacts = ({contacts, onDelete}) => {
    return (
    <div className={style.box_contact}>
        <TransitionGroup component='ul'className={style.list} >
               { contacts.length > 0 ? contacts.map((contact) => (
                       <CSSTransition 
                            in={true} 
                            key={contact.id} 
                            classNames={popItem}
                            timeout={250}
                            unmountOnExit
                            >
                           <li className={style.item} >
                               {contact.text} : {contact.number} 
                                <button className={style.button} onClick={()=> onDelete(contact.id)}>
                                    x
                                </button>
                             </li>
                       </CSSTransition> )
                        )
                : ''
            }
        </TransitionGroup>
    </div>
    )
}

Contacts.PropsTypes = {
    contacts:PropsTypes.node={
        id:PropsTypes.string,
        name:PropsTypes.string.isRequired,
        number:PropsTypes.string.isRequired
    },
    onDelete:PropsTypes.func.isRequired,
}


const mapStateToProps = (state) => ({ 
    contacts:selector.getVisibleContacts(state)
});

const mapDispatchToProps = {
    onDelete:listAction.removeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);