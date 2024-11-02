// import mongoose from "mongoose";
import { Schema, model } from 'mongoose';

const bookSchema = new Schema({
// const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    authors: {type: String, required: true},
    favorite: {type: String, required: true},
    fileCover: {type: String, required: true},
    fileName: {type: String, required: true},
});

// export const Book = mongoose.model('Book', bookSchema);
export const Book = model('Book', bookSchema);