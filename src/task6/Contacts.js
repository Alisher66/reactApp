import React from "react";
import './style.css';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            contacts: [],
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let contact = {name: this.state.name, phone:this.state.phone, email:this.state.email}
        this.state.contacts.push(contact);
        this.setState({
            name: "",
            phone: "",
            email: "",
            contacts: [...this.state.contacts]
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    deleteContact(index) {
        this.state.contacts.splice(index, 1);
        this.setState({
            contacts: [...this.state.contacts]
        });
    }
    showContacts() {
        return (
            <div className="contact__list-wrap">
                <p>Список контактов</p>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    {this.state.contacts.map((contact, index) => {
                        return (
                            <tr>
                                <td>{index +1}</td>
                                <td>{contact.name}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td><button onClick={this.deleteContact.bind(this, index)}>delete</button></td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }

    contactsForm() {
        return (
            <div className="contact__form-wrap">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <p>Добавить контак</p>
                    <label htmlFor="userName">Имя
                        <input type="text" id="userName" value={this.state.name} onChange={this.onChangeName.bind(this)} />
                    </label><br />
                    <label htmlFor="phone">Телефон
                        <input type="text" id="phone" value={this.state.phone} onChange={this.onChangePhone.bind(this)} />
                    </label> <br />
                    <label htmlFor="email">Эл. почта
                        <input type="text" id="email" value={this.state.email} onChange={this.onChangeEmail.bind(this)} />
                    </label> <br />
                    <button type="submit" id="addContact" >Добавить</button>
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