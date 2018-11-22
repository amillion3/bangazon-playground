import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import Products from './Components/Products/Products';

class App extends Component {
  state = {
    characters: [],
    products: []
  };

  removeCharacter = index => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  }

  render() {
    const {characters} = this.state;
    const {products} = this.state;

    return (
      <div className = "container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form
          handleSubmit={this.handleSubmit}
        />
        <Products
          productData={products}
        />
      </div>
    );
  }
}

export default App;