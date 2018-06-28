import React, {Component} from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import List from './List'
import Search from './Search'
import {Route} from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }


  refreshState= (newBook, newShelf) => {
        this.setState(temp => ({
            books: temp.books.filter(book => book.id !== newBook.id).concat([newBook])
        }))
        BooksAPI.update(newBook, newShelf)
    }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<List books={this.state.books} changeShelf={this.refreshState}/>)}/>
        <Route exact path="/search" render={({history}) => (<Search  books={this.state.books} changeShelf={this.refreshState}/>)}/>
      </div>
    )
  }
}

export default BooksApp
