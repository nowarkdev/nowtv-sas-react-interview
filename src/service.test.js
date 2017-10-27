import getChatLog from './service';
import sinon from 'sinon';
import * as data from "./data"
// import jest from 'jest';
// This is just a sample test to show you the desired format and fields, feel free to delete it.

let getMembersStub, getMessagesStub;

afterEach(() => {
    if (getMembersStub)
        getMembersStub.restore();
    if (getMessagesStub)
        getMessagesStub.restore();
});

it('returns the correct format', () => {
    return getChatLog().then(([firstMessage]) => {
        expect(typeof firstMessage.id).toBe('string');
        expect(typeof firstMessage.userId).toBe('string');
        expect(typeof firstMessage.timestamp).toBe('string');
        expect(typeof firstMessage.message).toBe('string');
        expect(firstMessage.avatar === null).toBeTruthy();
        expect(firstMessage.timestamp).toBe('2017-02-27T13:47:25Z');
    });


});


it("map the users with messages", () => {
    getMembersStub = sinon.stub(data, 'getMembers').returns(Promise.resolve([
        {id: 1, firstName: 'm', lastName: 's', avatar: 'av', email: 'email'}
    ]));
    getMessagesStub = sinon.stub(data, 'getMessages').returns(Promise.resolve([{
        id: 'm1', userId: 1, message: 'msg'
    }]));

    getChatLog().then(([firstMessage]) => {
        expect(firstMessage.id).toBe('m1');
        expect(firstMessage.fullName).toBe('m s');
        expect(firstMessage.email).toBe('email');
        expect(firstMessage.avatar).toBe('av');
    });
});

it("orders the messages by timestamp", () => {
    sinon.stub(data, 'getMembers').returns(Promise.resolve([
        {id: 1, firstName: 'm', lastName: 's', avatar: 'av', email: 'email'}
    ]));
    sinon.stub(data, 'getMessages').returns(Promise.resolve([
        {id: 'm1', userId: 1, message: 'msg', timestamp: '2017-03-27T13:47:25Z'},
        {id: 'm2', userId: 1, message: 'msg', timestamp: '2017-02-27T13:47:25Z'},
        {id: 'm3', userId: 1, message: 'msg', timestamp: '2018-02-27T13:47:25Z'}
    ]));

    getChatLog().then((messages) => {
        expect(messages[0].id).toBe('m3');
        expect(messages[1].id).toBe('m1');
        expect(messages[2].id).toBe('m2');
    });
});
