import { compare, hash, genSalt } from "bcryptjs";

export const passwordHash = async (password) => {
  const salt = await genSalt(10);
  const hashPassword = await hash(password, salt);
  return hashPassword;
};

export const passwordCheck = async (password, hashPassword) => {
  const isMatch = await compare(password, hashPassword);
  return isMatch;
}
