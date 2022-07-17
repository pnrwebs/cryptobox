export default phoneNumberValidator = (phonenumber) => {
    const re =  /^\d{10}$/;
    if (!phonenumber || phonenumber.length <=0 ) return 'Please enter phone number';
    if (!re.test(String(phonenumber)))  return 'Please enter valid phone number';
    return null;
  };