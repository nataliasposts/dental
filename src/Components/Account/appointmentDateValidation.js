export const appointmentDateValidation = (formDate) =>{
    const errorObj = {};
    let isFormValid = true;

    if (!formDate.appointmentDate) {
        errorObj.appointmentDate = 'Please choose the date and time';
        isFormValid = false;
    } 
    return isFormValid ? null : errorObj;;
}