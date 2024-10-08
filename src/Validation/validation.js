 const validateName = name => {
  if (!name) {
    setNameError(true);
    return false;
  }
  setNameError(false);
  return true;
};

 const validateDOB = dob => {
  const dobPattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!dob || !dobPattern.test(dob)) {
    setDobError(true);
    return false;
  }
  setDobError(false);
  return true;
};

 const validateEmail = email => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    setEmailError(true);
    return false;
  }
  setEmailError(false);
  return true;
};
