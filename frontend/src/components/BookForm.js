import React from 'react'
import { TextField, Button, StepContent } from '@material-ui/core/'
import './../styles/app.css'

const BookForm = ({ 
  book, 
  handleAddBook, 
  handleChange, 
  handleEditBook,
  handleDeleteBook
 }) => {
  return (
      <div>
        <br />
        <br />
        <form className='form' noValidate autoComplete='off' onSubmit={() => handleAddBook(book)}>
          <div className='form-group'>
            <TextField id='title' label='Title' type='text'
              value={book.title}
              name='title'
              onChange={handleChange}>
            </TextField>
          </div>
          <br />
          <div className='form-group'>
            <TextField id='author' label='Author' type='text'
              value={book.author}
              name='author'
              onChange={handleChange}>
            </TextField>
          </div>
          <br />
          <div className='form-group'>
            <TextField id='description' label='Description' type='text'
              value={book.description}
              name='description'
              onChange={handleChange}>
            </TextField>
          </div>
          <br />
          <div>
          <Button variant='outlined' color='default' type='submit'
            disabled={!book.title || !book.author || !book.description}>
            Save new
          </Button>
          <Button variant='outlined' color='default' 
            onClick={() => handleEditBook(book)}
            disabled={!book.title || !book.author || !book.description}>
            Save edit
          </Button>
          <Button variant='outlined' color='default' 
            onClick={() => handleDeleteBook(book)}
            disabled={!book.title || !book.author || !book.description}>
            Delete
          </Button>
          </div>
        </form>
      </div>
  )
}

export default BookForm