import React, { Component } from 'react';
import Form from './components/Form';
import ContactsList from './components/Contacts';
import ContactFilter from './components/Filter/ContactFilter';
import {connect} from 'react-redux';



import appFetch from './redux/action/app'
import selectors from './redux/selectors'


class App extends Component{
    //add list contacts in load site
    componentDidMount(){
       this.props.onFetchContacts();
    }
    render(){
        return (
            <>
                <Form />
                {this.props.contacts.length > 1 && 
                    <ContactFilter /> 
                }       
                <ContactsList/>
            </>
        )
    }
}


const mapStateToProps = state => ({
        contacts:selectors.getContactsItems(state)
})

const mapDispatchProps = {
    onFetchContacts:appFetch.fetchItems
}

export default connect(mapStateToProps,mapDispatchProps)(App);