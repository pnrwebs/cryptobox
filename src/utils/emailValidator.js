
export default function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email || email.length <= 0) 
      return 'Please enter email.';
    if (!re.test(String(email).toLowerCase())) 
      return 'That’s an incorrect email. Try again.';

    return null;
  }
  