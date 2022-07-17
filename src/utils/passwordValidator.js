export default (passwordValidator = password => {
  const re = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
  if (!password || password.length <= 0) 
    return 'Please enter password.';

  return null;
});
