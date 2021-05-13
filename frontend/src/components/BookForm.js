import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core/'
import './../styles/app.css'

const BookForm = ({ book, handleAddBook, handleChange, handleEditBook }) => {
  return (
      <div>
        <form noValidate autoComplete='off' onSubmit={() => handleAddBook(book)}>
          <div>
            <TextField id='title' label='Nimi' type='text'
              defaultvalue={book.title}
              value={book.title}
              name='title'
              onChange={handleChange}>
            </TextField>
          </div>
          <br />
          <div>
            <TextField id='author' label='Kirjailija' type='text'
              defaultvalue={book.author}
              value={book.author}
              name='author'
              onChange={handleChange}>
            </TextField>
          </div>
          <br />
          <div>
            <TextField id='description' label='Kuvaus' type='text'
              defaultvalue={book.description}
              value={book.description}
              name='description'
              onChange={handleChange}>
            </TextField>
          </div>
          <div>
          <Button variant='outlined' color='default' type='submit'>
            Save new
          </Button>
          <Button variant='outlined' color='default' 
            onClick={() => handleEditBook(book)}
            disabled={!book.title}>
            Save
          </Button>
          </div>
        </form>
      </div>
  )
}

export default BookForm