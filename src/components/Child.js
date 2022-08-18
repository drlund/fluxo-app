import React, { Component } from 'react'

 class Child extends Component {
  render() {
    return (
        <div>
            <h3>Child</h3>
            {/* A propriedade incluída no componente Parent em Apps.js é passada aqui via props. */}
            <p>Nome: {this.props.nome}</p>
        </div>
        )
    }
}
export default Child;