import React, { Component } from 'react'

export default class MoviesDetail extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      id: nextProps.location.search.split("=")[1]
    };    // ถ้าไม่ได้ใช้ให้ return null
  }

  state = {
    id : ''
  }

  render() {
    return (
      <div>
      {this.state.id}
      <select name="totalSeat">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      </div>
    )
  }
}
