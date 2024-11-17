import * as userRepository from "../repositories/userRepository";

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  // You can add business logic here, such as hashing passwords
  return userRepository.createUser({ name, email, password });
};

export const getAllUsers = async () => {
  return userRepository.getAllUsers();
};

export const getUserById = async (id: number) => {
  return userRepository.getUserById(id);
};

export const updateUser = async (
  id: number,
  email: string,
  password: string
) => {
  return userRepository.updateUser(id, email, password);
};

export const deleteUser = async (id: number) => {
  return userRepository.deleteUser(id);
};
