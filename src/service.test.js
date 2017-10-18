import getChatLog from './service';
// import jest from 'jest';
// This is just a sample test to show you the desired format and fields, feel free to delete it.

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
