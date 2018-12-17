import React, { Component } from 'react';
import './css/EntryForm.css';

class EntryForm extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
    if(this.state.name!==''&& this.state.description!=='')
    {
      this.props.onAddTodo(this.state);
    this.setState({
      name:'',
      description:''
    });
  }
  else alert("Debe Incluir Nombre y Descripción")
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
<div className="card">
<form>
  <div className="form-row">
    <div className="col">
      <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="Nombre"
              />
    </div>
    <div className="col">
     <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripción"
              />
    </div>
    <div className="col">
      <button type="submit" className="btn btn-primary col-5" onClick={this.handleSubmit.bind(this)}>
            Guardar
          </button>
    </div>
  </div>
</form>

  </div>
    )
  }

}

export default EntryForm;