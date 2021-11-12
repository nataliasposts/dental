export const loginValidator = (formData) => {
    const errorObj = {};
    let isValid = true;

    if (!formData.email) {
        errorObj.email = 'Please input login';
        isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        errorObj.email = 'Invalid email address';
        isValid = false;
    }

    if (!formData.password) {
        errorObj.password = 'Please input password';
        isValid = false;
    } else if (formData.password.length < 4) {
        errorObj.password = "Password is too short, please enter at least 4 character";
        isValid = false;
    }
    return isValid ? null : errorObj;
}