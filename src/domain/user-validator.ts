import { User } from "./user";

/* email should contain `gojob.com` and password should be longer than 4 char*/
export const isUserValid = (user: User) => {
  if (!user.email || !user.password) {
    return null;
  }
  if (user.password.length < 4 || user.email.split('gojob').length !== 2) {
    return false;
  }
  return true;
};
