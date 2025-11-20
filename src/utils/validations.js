import errorLabels from "../constants/errorLabels";

function isEmailValid(email) {
  const validEmailRegex =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/; //eslint-disable-line
  if (!email) return errorLabels.email.required;

  const emailParts = email.split("@");

  if (emailParts.length !== 2) return errorLabels.email.oneAt;

  const account = emailParts[0];
  const domain = emailParts[1];

  if (account.length > 64) return errorLabels.email.accountLong;
  else if (domain.length > 255) return errorLabels.email.domainLong;

  const domainParts = domain.split(".");

  if (domainParts.some((part) => part.length > 63))
    return errorLabels.email.domainPartLong;

  if (!validEmailRegex.test(email)) return errorLabels.email.invalid;

  return "valid";
}

function isUserNameValid(username) {
  if (username.length < 3) {
    return errorLabels.username.short;
  }
  if (username.length > 20) {
    return errorLabels.username.long;
  }

  const pattern = /^[a-zA-Z0-9._]+$/;
  if (!pattern.test(username)) {
    return errorLabels.username.invalidCharacters;
  }

  if (username.startsWith(".") || username.startsWith("_")) {
    return errorLabels.username.noStart;
  }
  if (username.endsWith(".") || username.endsWith("_")) {
    return errorLabels.username.noEnd;
  }

  return "valid";
}

function isPasswordValid(password) {
  if (password.length < 8) return errorLabels.pass.short;
  if (password == password.toLowerCase()) return errorLabels.pass.noUpper;
  if (password == password.toUpperCase()) return errorLabels.pass.noLower;

  return "valid";
}

export { isEmailValid, isPasswordValid, isUserNameValid };
