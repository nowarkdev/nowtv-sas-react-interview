import React, {Component} from 'react';
import './App.css';
import getChatLog from './service';
import Message from "./components/message/index";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        getChatLog().then((messages) => {
            this.setState({messages})
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.messages.map(message => {
                    return <Message key={message.id} {...message}/>

                })}
            </div>
        );
    }
}

export default App;
