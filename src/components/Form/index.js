import React from "react"
import "./Form.css"

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={novaTarefa} />
      <button type="submit">Adicionar</button>
    </form>
  )
}
