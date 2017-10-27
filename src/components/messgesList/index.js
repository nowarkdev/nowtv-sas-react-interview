import React, {Component} from 'react';
import Message from "../message/index";
import fetchMessages from '../../logic/actions';
import {connect} from 'react-redux';
class MessagesList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }
    }

    componentDidMount() {

        this.props.fetchMessages();

        // FIRE AN ACTIOn

        // getChatLog().then((messages) => {
        //     this.setState({messages})
        // })
    }

    render() {
        
        return (<div className="container">    

                {this.props.messages.map(message => {
                    return <Message key={message.id} {...message}/>

                })}
            </div> 
        )
        }

    }

    const mapStateToProps = state => {
        return {messages: state.messages.messages};
    };
    
    const mapDispatchToProps = dispatch => ({
        fetchMessages: () => dispatch(fetchMessages())
    });
    
    export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);