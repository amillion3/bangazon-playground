import React, {Component} from 'react';


class Products extends Component {
  state = {
    products: [],
    productId: 0,
    productDeleteId: 0,
    productUpdate: {
      id: 0,
      price: 0,
      title: "",
      description: "",
      quantity: 0,
      owner_id: 0
    }
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
    // this part WILL need a second look
    .then(product => product.json())
    .then(products => {
      this.setState({
        products
      });
    })
  }
  handleDeleteProduct = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  // Update Product
  clickUpdateProduct = () => {

  }
  handleDeleteProduct = e => {

  }
  render () {
    const {products, productId, productDeleteId, productUpdate} = this.state;

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
        <hr/>

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
        <hr/>
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
        <hr/>
        <div>
          <form>
            <label>Product Id:</label>
            <input
              type="number"
              name="id"
              value={productUpdate.id}
              onChange={this.handleUpdateProduct}
            />
            <input
              type="button"
              value="Grab This Id"
              onClick={this.clickUpdateProductGet}
            />
            <label>Product Price:</label>
            <input
              type="number"
              name="price"
              value={productUpdate.price}
              onChange={this.handleUpdateProduct}
            />
            <label>Product Title:</label>
            <input
              type="text"
              name="title"
              value={productUpdate.title}
              onChange={this.handleUpdateProduct}
            />
            <label>Product Description:</label>
            <input
              type="text"
              name="description"
              value={productUpdate.description}
              onChange={this.handleUpdateProduct}
            />
            <label>Product Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={productUpdate.quantity}
              onChange={this.handleUpdateProduct}
            />
            <label>Product Owner Id:</label>
            <input
              type="number"
              name="owner_id"
              value={productUpdate.owner_id}
              onChange={this.handleUpdateProduct}
            />
            <input
              type="button"
              value="Update"
              onClick={this.clickUpdateProduct}
            />
          </form>
        </div>
        <hr/>
        <ul>{output}</ul>
      </div>
    );
  }
}

export default Products;