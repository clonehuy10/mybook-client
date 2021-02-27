import apiUrl from '../apiConfig'
import axios from 'axios'

export const createBook = (book, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/books',
    header: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      book: {
        time: book.time,
        in: book.in,
        out: book.out
      }
    }
  })
}

export const showBook = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/books',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const updateBook = (id, book, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/books/' + id,
    header: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      book: {
        time: book.time,
        in: book.in,
        out: book.out
      }
    }
  })
}
