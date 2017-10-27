
const initialState = {
    messages: []
}

const messagesReducer = (state = initialState, action)=>{

    switch (action.type) {

    case 'Fetch_Messages_SUCCESS_NT': { 
            return [...state.messages, action.payload];
        }
    }
}

export default messagesReducer;