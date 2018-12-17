import React,{Component} from 'react';

class Filter extends Component{
constructor () {
    super();
    this.state = {
      name: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Finder = this.Finder.bind(this);
  }

  Finder(e) {
      e.preventDefault();
  this.props.onFinder(this.state.name)
  
  }

  handleInputChange(e) {
    const {value, name} = e.target;
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
      <button type="submit" className="btn btn-primary col-5" onClick={this.Finder.bind(this)}>
           Buscar
          </button>
    </div>
  </div>
</form>

  </div>
    )
  }
}

export default Filter;