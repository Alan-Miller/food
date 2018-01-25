import React, { Component } from 'react';
import axios from 'axios';

export default class Food extends Component {

  constructor() {
    super()

    this.state = {
      foods: [],
      faves: [],
      discount: 0
    }
    this.discount = this.discount.bind(this)
  }

  componentWillMount() {
    axios.get('/api/foods').then(response => {
      this.setState({ foods: response.data })
    });
    axios.get('/api/faves').then(response => {
      this.setState({ faves: response.data })
    });
  }

  addToFaves(food) {
    axios.post('/api/faves', { food: food }).then(response => {
      this.setState({ faves: response.data })
    });
  }

  removeFromFaves(foodId) {
    axios.delete('/api/faves/' + foodId).then(response => {
      this.setState({ faves: response.data })
    })
  }

  discount() {
    const discount = this.state.discount;
    axios.put(`/api/foods?promo=${discount}`).then(response => {
      this.setState({foods: response.data})
    })
  }

  render() {
    return (
      <div className="Menu main">

        <div className="foods list">
          {this.state.foods.map((food, indx) => (
            <div key={indx} className="food">
              <span onClick={() => { this.addToFaves(food) }} >{food.dish}</span>
              <span >${food.price}</span>
            </div>
          ))}
        </div>

        <div className="discount" >
          <input value={this.state.discount} onChange={e => this.setState({ discount: e.target.value })} />
          <div onClick={this.discount} >Discount!</div>
        </div>

        <div className="faves list">
          {this.state.faves.map((fave, indx) => (
            <div key={indx} className="fave">
              <span onClick={() => { this.removeFromFaves(fave.id)}}>{fave.dish}</span>
            </div>
          ))}
        </div>

      </div>
    )
  }
}