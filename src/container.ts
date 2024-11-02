import 'reflect-metadata';
import { Container } from "inversify";
import { BooksRepository, MongoBooksRepository } from "./repositories/BooksRepository";
// import { BookService } from './BookService';

const myContainer = new Container();

myContainer.bind<BooksRepository>(BooksRepository).to(MongoBooksRepository);

export { myContainer };