export const validateUsername = (value: string): Promise<any> => {
    if (!value.length) {
        return Promise.reject('Please input your username!');
    }
    if (value.length < 8) {
        return Promise.reject('Please enter a username that is at least 8 characters long.');
    } else {
        return Promise.resolve();
    }
};
