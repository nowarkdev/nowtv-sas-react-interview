import React, {Component} from 'react';
import './App.css';

import configureStore from './redux/store';

import {Provider} from 'react-redux';
import MessagesList from './components/messgesList';

const store = configureStore();

// const newMessage = {
//     id: new Date().getMilliseconds(),
//     userId: 'dummy user1',
//     message: 'added message',
//     timestamp: new Date(),
//     fullName: 'Dumy User',
//     email:'Dummy.user@email.com'
// };

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    render() {
       
        return (
            <Provider store={store}>
                <div className="app">
                    <div className="container">
                        <MessagesList />
                    </div>
                </div>
            </Provider>
        );
    }

    }


export default App;
