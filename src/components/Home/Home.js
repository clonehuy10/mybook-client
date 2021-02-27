import React, { useState, useEffect } from 'react'

import { createBook } from '../../api/book'

import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Home = props => {
  const [data, setData] = useState({
    time: '',
    in: 0,
    out: 0
  })

  useEffect(() => {
  })

  const handleChange = event => {
    setData({ [event.target.name]: event.target.value })
  }

  const onSubmit = event => {
    event.preventDefault()

    createBook(data, props.user)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  return (
    <div>
      <Form className="row" onSubmit={onSubmit}>
        <Form.Group className="col-5" controlId="time">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            name="time"
            value={data.time}
            type="string"
            placeholder="Date"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col-3" controlId="in">
          <Form.Label>Earn</Form.Label>
          <Form.Control
            required
            name="in"
            value={data.in}
            type="number"
            placeholder="Money Earned"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="col-3" controlId="out">
          <Form.Label>Spend</Form.Label>
          <Form.Control
            required
            name="out"
            value={data.out}
            type="number"
            placeholder="Money Spent"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>In</th>
            <th>Out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Home
