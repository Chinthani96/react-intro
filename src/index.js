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

const Hiring = () =>
    <div>
        <p>Library is hiring!</p>
    </div>

const NotHiring = () =>
    <div>
        <p>Library is not hiring!</p>
    </div>

const Book = ({title,author,pages,freeBookmark}) => {
    return(
        <section>
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>{pages} pages</p>
            <p>Free bookmark today : {freeBookmark ? 'Yes!' : 'No!'}</p>
        </section>
    )
}

class Library extends Component{
    state = {
        open : true,
        freeBookmark: false,
        hiring: false
    }
    componentDidMount() {
        console.log("Component is mounted!");
    }
    componentDidUpdate() {
        console.log("Component updated!");
    }

    toggleOpenClosed = ()=>{
        this.setState(prevState=> ({
            open: !prevState.open
        }))
    }
    render(){
        const { books } = this.props;
        // console.log(this.state);
        return(
            <div>
                {this.state.hiring? <Hiring /> : <NotHiring />}
                <h1>The Library is {this.state.open ? "Open" : "Closed"}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book,i) => <Book
                        key={i}
                        title={book.title}
                        author={book.author}
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}
                    />
                )}
            </div>
        )
    }

}
render(
    <Library books={bookList}/>,
    document.getElementById("root")
)
