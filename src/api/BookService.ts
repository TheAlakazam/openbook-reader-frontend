import axios from 'axios';

export interface Book {
    bookid : number;
    title : string;
    authors : string;
    average_rating : number;
    isbn : string;
    isbn13 : number;
    language_code : string;
    num_page : number;
    ratings_count : number;
    text_reviews_count : number;
    publication_date : string;
    publisher : string;
};

const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const getAllBooks = async (page : number) => {
    return instance.get("/books", {
        params: {
            page
        }
    });
};

export const getReadBooks = async () => {
    return instance.get("/user/readBooks");
}

export const getCurrentBooks = async () => {
    return instance.get("/user/currentBooks");
}

export const getToReadBooks = async () => {
    return instance.get("/user/toReadBooks");
}

export const searchBooks = async (search : string, page : number) => {
    return instance.get("/books/search", {
        params: {
            search,
            page
        }
    });
};

export const getBookById = async (bookid : number) => {
    return instance.get(`/books/${bookid}`);
};