import React, {Component} from 'react';
import Loading from '../Loading';
import ContactInfo from './ContactInfo';
import '../../App.css';

class AppPhonebook extends Component {

    state = {
        contacts: '',
        contactIdActive: 100,
        contactInfo: '',
        loading: true,
    };

    getContacts = () => {
        console.log('getContacts');
        this.setState({
            loading: true,
        });
        fetch('https://api.ifcityevent.com/phonelist')
            .then(response => response.json())
            .then(contactsInfo => {
                this.setState({
                    contacts: contactsInfo,
                    loading: false,
                })
            })
            .then(() => this.getContactInfo(this.state.contactIdActive));
    };

    getContactId = (e) => {
        console.log(e.target.value);
        this.setState({
            contactIdActive: e.target.value,
        });
    };

    getContactInfo = (idActual) => {
        this.setState({
            loading: true,
        });
        fetch(`https://api.ifcityevent.com/phonelist/${idActual}`)
            .then(response => response.json())
            .then(contactInfo => {
                console.log(contactInfo);
                this.setState({
                    contactInfo: contactInfo,
                    loading: false,
                })
            })
    };

    componentDidMount() {
        this.getContacts();
        console.log(`componentDidMount Contacts: ${JSON.stringify(this.state.contacts)}`);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.contactIdActive);

        const {contactIdActive: prevId} = prevState;
        const {contactIdActive: idActual} = this.state;
        if (prevId && (prevId !== idActual)) {
            this.getContactInfo(idActual);
        }
    }

    render() {
        console.log(`render contacts: ${JSON.stringify(this.state.contacts)}`);

        const {contacts, loading, contactInfo, contactIdActive} = this.state;

        return (
            <div className="contacts">
                <h1>Phonebook</h1>
                <ul className="contactsList">{contacts && contacts.map(({id, firstName, lastName}) => {
                    return (
                        <li className={id === contactIdActive ? "active contact" : "contact"}
                            value={id}
                            onClick={this.getContactId}
                            key={id}
                        >{firstName} {lastName}</li>)
                })
                }
                </ul>
                {loading ? <Loading/> : (contacts && contactInfo && <ContactInfo contactInfo={contactInfo}/>)}
            </div>
        )
    }
}

export default AppPhonebook;
