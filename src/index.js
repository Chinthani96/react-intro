import React, { Component} from "react"
import { render } from "react-dom"

const bookList = [
    {"title":"Inferno", "author":"Dan Brown", "pages":700},
    {"title":"Da Vinci Code", "author":"Dan Brown", "pages":600},
    {"title":"Book 3", "author":"Author 3", "pages":200},
    {"title":"Harry Potter", "author":"J K Rowling", "pages":300},
    {"title":"Famous Five", "author":"Enid Blyton", "pages":1000},
    {"title":"Sherlock Holmes", "author":"Author Conon Doyle", "pages":30}
]

const Book = ({title,author,pages}) => {
    return(
        <section>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>{pages} pages</p>
        </section>
    )
}

const Library = ({books}) => {
    return(
        <div>
            {books.map(
                (book,i) => <Book
                    key={i}
                    title={book.title}
                    author={book.author}
                    pages={book.pages}/>
            )}
        </div>
    )
}
render(
    <Library books={bookList}/>,
    document.getElementById("root")
)
