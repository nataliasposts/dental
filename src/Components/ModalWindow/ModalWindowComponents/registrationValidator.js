export const registrationValidator = (formData) => {
    const errorObj = {};
    let isFormValid = true;

    if (!formData.email) {
        errorObj.email = 'Please input login';
        isFormValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
        errorObj.email = 'Invalid email address';
    }

    if (!formData.password) {
        errorObj.password = 'Please input password';
        isFormValid = false;
    } else if (formData.password.length < 4) {
        errorObj.password = "Password too short, please enter at least 4 character";
    }

    if (!formData.FirstName) {
        errorObj.FirstName = 'Please input first name';
        isFormValid = false;
    }

    if (!formData.SecondName) {
        errorObj.SecondName = 'Please input second name';
        isFormValid = false;
    }

    if (!formData.Birthday) {
        errorObj.Birthday = 'Please input date of birthday';
        isFormValid = false;
    }

    return isFormValid ? null : errorObj;
}