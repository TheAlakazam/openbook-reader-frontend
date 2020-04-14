import React from 'react'
import { Book } from '../api/BookService'
import { Card } from 'react-bootstrap'

export default function Book(props : {book : Book}) {
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={`http://covers.openlibrary.org/b/isbn/${props.book.isbn}-M.jpg`}/>
            <Card.Title>
                {props.book.title}
            </Card.Title>
            <Card.Text>
                by {props.book.authors}
            </Card.Text>
        </Card>
    )
}
