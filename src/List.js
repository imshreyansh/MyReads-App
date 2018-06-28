import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import {Link} from 'react-router-dom'
import Books from './Books'


class List extends Component {

  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

moveFromShelf=(id,event)=>{
    const shelf = event.target.value
    let book = this.props.books.filter(bookID => bookID.id === id)[0]
    book.shelf = shelf
     if (this.props.changeShelf) {
            this.props.changeShelf(book, shelf);
        }
}
  render() {
    const {books} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Books 
            books={books.filter((book) => (book.shelf === "currentlyReading"))} 
            onChangeShelf={this.moveFromShelf}
             Shelf_Title="Currently Reading" 
           
                    />

                   <Books 
            books={books.filter((book) => (book.shelf === "wantToRead"))} 
            onChangeShelf={this.moveFromShelf}
            Shelf_Title="Want to Read" 
        


            />
                 
            <Books 
            books={books.filter((book) => (book.shelf === "read"))} 
            onChangeShelf={this.moveFromShelf}
             Shelf_Title="Read" 
         

                />
          
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default List;
