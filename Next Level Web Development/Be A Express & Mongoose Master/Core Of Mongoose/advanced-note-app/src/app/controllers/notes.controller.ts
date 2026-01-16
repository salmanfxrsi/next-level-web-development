import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";
import app from "../../app";

export const notesRoutes = express.Router();

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(201).json({
    success: true,
    message: "note created successfully",
    notes,
  });
});

app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const notes = await Note.findById(noteId);

  res.status(201).json({
    success: true,
    message: "note created successfully",
    notes,
  });
});

app.post("/notes/create-note", async (req: Request, res: Response) => {
  const body = req.body;
  const note = await Note.create(body);

  res.status(201).json({
    success: true,
    message: "note created successfully",
    note,
  });
});

app.patch("/notes/noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const updatedBody = req.body;
  const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true });

  res.status(201).json({
    success: true,
    message: "note updated successfully",
    note,
  });
});

app.delete("/notes/noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findByIdAndDelete(noteId);

  res.status(201).json({
    success: true,
    message: "note deleted successfully",
    note,
  });
});