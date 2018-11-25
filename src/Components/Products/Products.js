import React, {Component} from 'react';


class Products extends Component {
  state = {
    products: [],
    productGetId: 0,
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
    const url = `https://localhost:44398/api/product/${this.state.productGetId}`;
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
    return fetch(url, {
      method: 'delete'
    })
    .then(product => product.json())
    .then(products => {
      if (products) {
        this.clickGetAllProducts();
      } else {
        alert('Error in deleting');
      }
      // this part WILL need a second look
    })
  }
  handleDeleteProduct = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  // Update Product
  populateFieldsForUpdate = () => {

  };
  // Gets a single product, for the update methods
  clickUpdateProductGet = () => {
    const url = `https://localhost:44398/api/product/${this.state.productUpdate.id}`;
    return fetch(url)
    .then(product => product.json())
    .then(productUpdate => {
      productUpdate = productUpdate[0];
      this.setState({
        productUpdate
      });
      console.log('1this.state after singleProductget', this.state.productUpdate);

      // This updates the id, which is not updated in the previous setState()
      // this.setState({
      //   productUpdate: {
      //     id: oldProductId
      //   }
      // });
      // console.log('2this.state after singleProductget', this.state.productUpdate);
    })
  }
  clickUpdateProduct = () => {
    const dataForUpdate = {
      "price": this.state.productUpdate.price,
      "title": this.state.productUpdate.title,
      "description": this.state.productUpdate.description,
      "quantity": this.state.productUpdate.quantity,
      "owner_id": this.state.productUpdate.owner_id
    }
    const url = `https://localhost:44398/api/product/${this.state.productUpdate.id}`;
    debugger;
    console.log(url);
    return fetch(url, {
      method: 'put',
      body: dataForUpdate
      // body: JSON.stringify(dataForUpdate)
    })
    .then(product => product.json())
  }
  handleUpdateProduct = e => {
    const {name, value} = e.target;
    console.log(name, value);
    this.setState({
      productUpdate: {
        [name]: value
      }
    });
    console.log('handleUpdateProduct',this.state.productUpdate);
  }
  render () {
    const {
      products,
      productGetId,
      productDeleteId,
      productUpdate
    } = this.state;

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
        <div>
          <h3>Get All products</h3>
          <input
            type="button"
            value="Get All Products"
            onClick={this.clickGetAllProducts}
          />
        </div>
        <hr/>
        <div className='div-product-get-single'>
          <form>
            <h3>Get Single Product</h3>
            <label>Get by Id:</label><br/>
            <input
              type="number"
              name="productGetId"
              value={productGetId}
              onChange={this.handleSingleProduct}
              />
            <input
              type="button"
              value="Get Product"
              onClick={this.clickGetSingleProduct}
              />
          </form>
        </div>
        <hr/>
        <div>
          <form>
            <h3>Delete Product</h3>
            <label>Delete by Id:</label><br/>
            <input
              type="number"
              name="productDeleteId"
              value={productDeleteId}
              onChange={this.handleDeleteProduct}
            />
            <input
              type="button"
              value="Delete Product"
              onClick={this.clickDeleteProduct}
            />
          </form>
        </div>
        <hr/>
        <div>
          <form>
            <h3>Update Product</h3>
            <label>Update by Id:</label><br/>
            <input
              type="number"
              name="id"
              value={this.id}
              onChange={this.handleUpdateProduct}
            />
            <input
              type="button"
              value="Grab This Id"
              onClick={this.clickUpdateProductGet}
            /><br/>
            <label>Product Price:</label>
            <input
              type="number"
              name="price"
              value={productUpdate.price}
              onChange={this.handleUpdateProduct}
            /><br/>
            <label>Product Title:</label>
            <input
              type="text"
              name="title"
              value={productUpdate.title}
              onChange={this.handleUpdateProduct}
            /><br/>
            <label>Product Description:</label>
            <input
              type="text"
              name="description"
              value={productUpdate.description}
              onChange={this.handleUpdateProduct}
            /><br/>
            <label>Product Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={productUpdate.quantity}
              onChange={this.handleUpdateProduct}
            /><br/>
            <label>Product Owner Id:</label>
            <input
              type="number"
              name="owner_id"
              value={productUpdate.owner_Id}
              onChange={this.handleUpdateProduct}
            /><br/>
            <input
              type="button"
              value="Update"
              onClick={this.clickUpdateProduct}
            /><br/>
          </form>
        </div>
        <hr/>
        <ul>{output}</ul>
      </div>
    );
  }
}

export default Products;