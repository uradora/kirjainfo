import React, { useState, useEffect } from 'react'
import bookService from './services/books'
import Book from './components/Book'
import BookForm from './components/BookForm'
import './styles/app.css'

const App = () => {
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState(
    {
      id: '',
      title: '',
      author: '',
      description: ''
    }
  )

  useEffect(() => {
    bookService.getAll().then((books) => setBooks(books))
    }, [])

  const handleAddBook = (book) => {

    const newBook = {
      'title': book.title,
      'author': book.author,
      'description': book.description
    }

    bookService
      .addBook(newBook)
      .then((returnedBook) => {
        setBooks(books.concat(returnedBook))
        setNewBook = {
          id: '',
          title: '',
          author: '',
          description: ''
        }
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }

  const handleEditBook = async (book) => {
    const idToEdit = book.id

    const editedBook = {
      'title': book.title,
      'author': book.author,
      'description': book.description
    }
    try {
      const returnedBook = await bookService.editBook(idToEdit, editedBook)
      setBooks(books.map((book) => book.id !== idToEdit ? book : returnedBook))
    } catch (err) {
      console.log(`Couldn't edit: ${err}`)
    }
  }

  const handleDeleteBook = async (book) => {
    const idToDelete = book.id

    try {
      await bookService.deleteBook(idToDelete)
      setBooks(books.filter((book) => book.id !== idToDelete))
    } catch (err) {
      console.log(`Couldn't delete: ${err}`)
    }
  }
    
  const handleClick = (book) => {
    setNewBook({
      id: book.id,
      title: book.title,
      author: book.author,
      description: book.description
    })
  }

  const handleChange = (event) => {
    event.preventDefault()
    setNewBook({ ...newBook, [event.target.name]: event.target.value })
  }  

  return (

    <div className='wrapper'>
      <div className='list'>
        {books.map((book) => (
          <Book
            key={book.id}
            book={book}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div id='page-wrap'>
        <BookForm 
          book={newBook} 
          handleAddBook={handleAddBook} 
          handleChange={handleChange}
          handleEditBook={handleEditBook}
          handleDeleteBook={handleDeleteBook}
        />
      </div>
    </div>
    )
  }

export default App