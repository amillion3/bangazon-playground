import React, {Component} from 'react';


class Products extends Component {
  state = {
    products: []
  };

  handleClick = event => {
    const url = 'https://localhost:44398/api/product';
    fetch(url)
    .then(result => result.json())
    .then(result => {
      this.setState({
        products: result
      })
    })
  }

  render () {
    const {products} = this.state;

    const output = products.map((product, index) => {
      return <li key={index}>{product}}</li>
    })
    return <ul>{output}</ul>

  }
}

export default Products;