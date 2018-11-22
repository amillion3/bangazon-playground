import React, {Component} from 'react';


class Products extends Component {
  state = {
    products: [],
    singleProduct: [],
    productId: 0
  };

  clickGetAllProducts = () => {
    const url = 'https://localhost:44398/api/product';
    fetch(url)
    .then(product => product.json())
    .then(products => {
      this.setState({
        products
      })
    })
  }

  clickGetSingleProduct = () => {
    const url = `https://localhost:44398/api/product/${this.state.productId}`;
    fetch(url)
    .then(product => product.json())
    .then(singleProduct => {
      this.setState({
        singleProduct
      })
    })
  }

  handleSingleProduct = e => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    });
  }

  render () {
    const {products, productId} = this.state;

    const output = products.map((product) => {
      return (
        <li key={product.id}>
          {product.id}--
          {product.title}--
          {product.description}
        </li>
      )
    })
    return (
      <div>
        <input
            type="button"
            value="Get All Products"
            onClick={this.clickGetAllProducts}
          />
        <ul>{output}</ul>
        <div>
          <form>
            <label>Single Product Id</label>
            <input
              type="number"
              name="productId"
              value={productId}
              onChange={this.handleSingleProduct}
            />
            <input
              type="button"
              value="Get Single Product"
              onClick={this.clickGetSingleProduct}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Products;