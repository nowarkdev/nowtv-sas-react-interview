export const FETCH_MESSAGES = 'Fetch_Messages_NT';
export const FETCH_MESSAGES_SUCCESS = 'Fetch_Messages_SUCCESS_NT';

export const fetchMessages = content => {
    return {type: FETCH_MESSAGES};
};