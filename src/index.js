import React, { Component} from "react"
import { render } from "react-dom"

const Book = ({title,author,pages}) => {
    return(
        <section>
            Hey there I'm a book!
            <h2>{title}</h2>
            <h5>{author}</h5>
            <p>{pages} pages</p>
        </section>
    )
}

const Library = () => {
    return(
        <div>
            <Book title="Inferno" author="Dan Brown" pages={700}/>
            <Book title="Da Vinci Code" author="Dan Brown" pages={700}/>
            <Book title="Book 3" author="Dan Brown" pages={700}/>
            <Book title="Book 4" author="Dan Brown" pages={700}/>
            <Book title="Book 6" author="Dan Brown" pages={700}/>
        </div>
    )
}

render(
    <Library />,
    document.getElementById("root")
)
