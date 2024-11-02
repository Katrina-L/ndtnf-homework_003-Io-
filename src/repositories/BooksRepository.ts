import 'reflect-metadata';
import { injectable } from "inversify";
import { Book } from "../models/Book";

export abstract class BooksRepository {
    abstract createBook(book: any): Promise<void>;               //  создание книги
    abstract getBook(id: string): Promise<any>;                  //  получение книги по id
    abstract getBooks(): Promise<any[]>;                         //  получение всех книг
    abstract updateBook(id: string, book: any): Promise<any>;    //  обновление книги
    abstract deleteBook(id: string): Promise<void>;              //  удаление книги
}

@injectable()
export class MongoBooksRepository extends BooksRepository {
    
    async createBook(bookData: any): Promise<void> {
        const book = new Book(bookData);
        await book.save();
    }

    async getBook(id: string): Promise<any> {
        return await Book.findById(id).select('-__v');
    }

    async getBooks(): Promise<any[]> {
        return await Book.find().select('-__v');
    }

    async updateBook(id: string, bookData: any): Promise<any> {
        return await Book.findByIdAndUpdate(id, bookData, { new: true });
    }

    async deleteBook(id: string): Promise<void> {
        await Book.findByIdAndDelete(id);
    }
}