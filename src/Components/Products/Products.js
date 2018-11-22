import React, {Component} from 'react';


class Products extends Component {
  state = {
    products: []
  };

  handleClick = () => {
    const url = 'https://localhost:44398/api/product';
    fetch(url)
    .then(product => product.json())
    .then(console.log('it worked'))
    .then(products => {
      this.setState({
        products
      })
    })
  }

  render () {
    const {products} = this.state;

    const output = products.map((product, index) => {
      return <li key={product.id}>{product.title}}</li>
    })
    return (
      <div>
        <input
            type="button"
            value="Get All Products"
            onClick={this.handleClick}
          />
        <ul>{output}</ul>
      </div>
    );
  }
}

export default Products;