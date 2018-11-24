import React, {Component} from 'react';


class Products extends Component {
  state = {
    products: [],
    productId: 0,
    productDeleteId: 0
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

  // Single Product
  clickGetSingleProduct = () => {
    const url = `https://localhost:44398/api/product/${this.state.productId}`;
    return fetch(url)
    .then(product => product.json())
    .then(products => {
      console.log(products);
      this.setState({
        products
      })
    })
  }
  handleSingleProduct = e => {
    const {name, value} = e.target;
    this.setState({
      [name]:value
    });
  }
  // Delete Product
  clickDeleteProduct = () => {
    const url = `https://localhost:44398/api/product/${this.state.productDeleteId}`;
    console.log(`https://localhost:44398/api/product/${this.state.productDeleteId}`);
    return fetch(url, {
      method: 'delete'
    })
    .then(product => product.json())
    .then(products => {
      console.log(products);
      this.setState({
        products
      });
    })
  }
  handleDeleteProduct = e => {
    const {name, value} = e.target;
    console.log(e.target.value);
    console.log(e.target.name);
    this.setState({
      [name]: value
    });
  }
  render () {
    const {products, productId, productDeleteId} = this.state;

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
        <h2>PRODUCTS</h2>
        <input
            type="button"
            value="Get All Products"
            onClick={this.clickGetAllProducts}
          />
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
        <div>
          <form>
            <label>Delete Product By Id:</label>
            <input
              type="number"
              name="productDeleteId"
              value={productDeleteId}
              onChange={this.handleDeleteProduct}
            />
            <input
              type="button"
              value="Delete"
              onClick={this.clickDeleteProduct}
            />
          </form>
        </div>
        <ul>{output}</ul>
      </div>
    );
  }
}

export default Products;