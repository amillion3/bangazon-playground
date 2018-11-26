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
    // const oldProductId = this.state.productUpdate.id;
    return fetch(url)
    .then(product => product.json())
    .then(productUpdate => {
      productUpdate = productUpdate[0];
      this.setState({
        productUpdate
      });
      console.log('1this.state after singleProductget', this.state.productUpdate);
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
  handleUpdateId = e => {
    this.setState({
      productUpdate: {
        id: e.target.value,
        price: this.state.productUpdate.price,
        title: this.state.productUpdate.title,
        description: this.state.productUpdate.description,
        quantity: this.state.productUpdate.quantity,
        owner_id: this.state.productUpdate.owner_id
      }
    });
    console.log('updateId', this.state.productUpdate);
  };
  handleUpdatePrice = e => {
    this.setState({
      productUpdate: {
        id: this.state.productUpdate.id,
        price: e.target.value,
        title: this.state.productUpdate.title,
        description: this.state.productUpdate.description,
        quantity: this.state.productUpdate.quantity,
        owner_id: this.state.productUpdate.owner_id
      }
    });
    console.log('updatePrice', this.state.productUpdate);

  };
  handleUpdateTitle = e => {
    this.setState({
      productUpdate: {
        id: this.state.productUpdate.id,
        price: this.state.productUpdate.price,
        title: e.target.value,
        description: this.state.productUpdate.description,
        quantity: this.state.productUpdate.quantity,
        owner_id: this.state.productUpdate.owner_id
      }
    });
    console.log('updateTitle', this.state.productUpdate);

  };
  handleUpdateDescription = e => {
    this.setState({
      productUpdate: {
        id: this.state.productUpdate.id,
        price: this.state.productUpdate.price,
        title: this.state.productUpdate.title,
        description: e.target.value,
        quantity: this.state.productUpdate.quantity,
        owner_id: this.state.productUpdate.owner_id
      }
    });
    console.log('updateDesc', this.state.productUpdate);

  };
  handleUpdateQuantity = e => {
    this.setState({
      productUpdate: {
        id: this.state.productUpdate.id,
        price: this.state.productUpdate.price,
        title: this.state.productUpdate.title,
        description: this.state.productUpdate.description,
        quantity: e.target.value,
        owner_id: this.state.productUpdate.owner_id
      }
    });
    console.log('updateQuantity', this.state.productUpdate);

  };
  handleUpdateOwnerId = e => {
    this.setState({
      productUpdate: {
        id: this.state.productUpdate.id,
        price: this.state.productUpdate.price,
        title: this.state.productUpdate.title,
        description: this.state.productUpdate.description,
        quantity: this.state.productUpdate.quantity,
        owner_id: e.target.value
      }
    });
    console.log('updateOwnerId', this.state.productUpdate);

  };

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
              value={this.state.productUpdate.id}
              onChange={this.handleUpdateId}
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
              onChange={this.handleUpdatePrice}
            /><br/>
            <label>Product Title:</label>
            <input
              type="text"
              name="title"
              value={productUpdate.title}
              onChange={this.handleUpdateTitle}
            /><br/>
            <label>Product Description:</label>
            <input
              type="text"
              name="description"
              value={productUpdate.description}
              onChange={this.handleUpdateDescription}
            /><br/>
            <label>Product Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={productUpdate.quantity}
              onChange={this.handleUpdateQuantity}
            /><br/>
            <label>Product Owner Id:</label>
            <input
              type="number"
              name="owner_id"
              value={productUpdate.owner_id}
              onChange={this.handleUpdateOwnerId}
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