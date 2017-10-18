import {getMembers, getMessages} from './data';

export default function getChatLog() {

    return Promise.all([getMembers(), getMessages()]).then(results => {

        const members = results[0];
        const messages = results[1];
        let chats = [];

        messages.forEach(msg => {
            const user = members.find(m => {
                return m.id === msg.userId;
            });

            chats.push(
                {
                    id: msg.id,
                    userId: user.id,
                    message: msg.message,
                    timestamp: msg.timestamp,
                    fullName: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    avatar: user.avatar
                }
            )
        });

        return chats.sort((a, b) => {
            let diff = new Date(b.timestamp) - new Date(a.timestamp);
            return diff / (Math.abs(diff) || 1);
        });
    });
};
