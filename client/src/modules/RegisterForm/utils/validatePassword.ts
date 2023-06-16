export const validatePassword = (value: string): Promise<any> => {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!value.length) {
        return Promise.reject('Please input your password!');
    }

    if (!passwordRegex.test(value)) {
        return Promise.reject(
            'Please enter a password that is at least 8 characters long, contains at least one digit, one special character, and one uppercase letter.'
        );
    } else {
        return Promise.resolve();
    }
};
