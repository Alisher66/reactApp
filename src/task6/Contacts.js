import React from "react";
import './style.css';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: {},
        };
    }

    addContact() {

    }
    showContacts() {
        return (
            <div className="contact__list-wrap">
                <p>Список контактов</p>

            </div>
        );
    }
    contactsForm() {
        return (
            <div className="contact__form-wrap">
                <form>
                    <p>Добавить контак</p>
                    <label for="userName">Имя</label>
                    <input type="text" id="userName" /> <br />
                    <label for="phone">Телефон</label>
                    <input type="text" id="phone" />  <br />
                    <label for="email">Эл. почта</label>
                    <input type="text" id="email" />  <br />
                    <button type="submit" id="addContact" onClick={this.addContact.bind(this)} >Добавить</button>
               </form>
            </div>
        )
    }
    render() {
        return (
            <div className="wrap">
                {this.showContacts()}
                {this.contactsForm()}
            </div>
        )
    }
}

export default Contacts