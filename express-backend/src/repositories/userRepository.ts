import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
  return prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({
    where: { id },
  });
};

export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return prisma.user.create({
    data,
  });
};

export const updateUser = async (
  id: number,
  email: string,
  password: string
) => {
  return prisma.user.update({
    where: { id },
    data: { email, password },
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};
