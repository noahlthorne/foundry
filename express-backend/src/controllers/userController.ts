import { Request, Response, RequestHandler } from "express";
import * as userService from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await userService.createUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getUserById: RequestHandler = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const user = await userService.getUserById(id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.json(user);
    return;
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
    return;
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { email, password } = req.body;
  try {
    const user = await userService.updateUser(id, email, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
};
