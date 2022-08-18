import React, { Component } from "react";
import Child from "./components/Child";
import TestaComponente from "./components/TestaComponente";

class App extends Component {

  state = {
    nome: "Paulo",
  }

  Alterar = () => {
    this.setState({
      nome: "João",
    });
  }

  render() {
    return (
      <div>
        <h3>Parent</h3>
        <button onClick={this.Alterar}>Alterar</button>
        <hr />
        <Child nome = {this.state.nome} />
        <hr />
        <TestaComponente />
      </div>
    )
  }
}

export default App;
