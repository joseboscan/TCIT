import React, { Component } from 'react';

class Cards extends Component{
	constructor(props){
      super();
      this.removeTo = this.removeTo.bind(this);
    }
 removeTo(index)
 {
  console.log(index)
  this.props.Remove(index);
 }   

render(){
if(this.props.todo.length>0)
 { 
const unitedBlog=this.props.todo.map((datsFrom,i)=>{
        return (
          <tr  key={datsFrom.Id_Blog}>
            <th scope="row">{datsFrom.name}</th>
            <td>{datsFrom.description}</td>
            <td><button type="submit" className="btn btn-danger" onClick={this.removeTo.bind(this,datsFrom.Id_Blog)}>
            Eliminar
          </button></td>
          </tr>    
           )})
 return(
<div>
 <table className="table">
      <thead className="thead-dark">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Eliminar</th>
    </tr>
    </thead>
    <tbody>
        {unitedBlog}
    </tbody>
    </table>
</div>
)}
  else{
        return ( <div> No Existen Datos en el Blog...</div> )
      }}}

export default Cards 