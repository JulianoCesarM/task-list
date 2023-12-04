import React, { Component } from "react"
import "./Main.css"
import { FaEdit, FaWindowClose } from "react-icons/fa"
export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: ["Fazer café", "Arrumar a cama", "Estudar"],
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    })
  }
  render() {
    const { novaTarefa, tarefas } = this.state
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input type="text" onChange={this.handleChange} value={novaTarefa} />
          <button type="submit">Adicionar</button>
        </form>
        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
