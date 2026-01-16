import express, { Request, Response } from "express";
import app from "../../app";
import { User } from "../models/user.model";

export const usersRoutes = express.Router();

app.get("/users", async (req: Request, res: Response) => {
  const notes = await User.find();

  res.status(201).json({
    success: true,
    message: "users found successfully",
    notes,
  });
});

app.get("/users/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const users = await User.findById(userId);

  res.status(201).json({
    success: true,
    message: "user created successfully",
    users,
  });
});

app.post("/users/create-user", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.create(body);

  res.status(201).json({
    success: true,
    message: "user created successfully",
    user,
  });
});

app.patch("/users/userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const updatedBody = req.body;
  const user = await User.findByIdAndUpdate(userId, updatedBody, { new: true });

  res.status(201).json({
    success: true,
    message: "user updated successfully",
    user,
  });
});

app.delete("/users/userId", async (req: Request, res: Response) => {
  const userId = req.params.noteId;
  const user = await User.findByIdAndDelete(userId);

  res.status(201).json({
    success: true,
    message: "user deleted successfully",
    user,
  });
});
