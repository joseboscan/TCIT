import React, { Component } from 'react';
import './css/App.css';
import EntryForm from './Components/EntryForm';
import Cards from './Components/Cards';
import Filter from './Components/Filter';


class App2 extends Component {
  constructor(){
      super();
      this.state={
        datsFromserver:[],
        dastfiltred:0,
        filtred:0
      }
      this.handleAddDatsFromserver = this.handleAddDatsFromserver.bind(this);
      this.removeDatsFromserver = this.removeDatsFromserver.bind(this);
      this.finder = this.finder.bind(this);

    }

componentWillMount() {

    fetch('http://localhost:3200/list'+'?key=Ep0ooe44dw9bvxZvW38639MnuHfD91')
      .then((response) => {
        console.log('json.  ..',response)
           return response.json();
      })
      .then((blogs) => {
             this.setState({ datsFromserver:blogs })
      })
  }
removeDatsFromserver(index)
    { var indice=0;
      if(window.confirm('Esta Seguro?'))
      {
         this.setState({
      datsFromserver: this.state.datsFromserver.filter((e, i) => {
        if(e.Id_Blog===index)
          indice=e.Id_Blog;
        return e.Id_Blog !== index
      })})
    }

    fetch('http://localhost:3200/remove?id='+indice+'&key=Ep0ooe44dw9bvxZvW38639MnuHfD91')
      .then((response) => {
           return 1;
      })
      .then((blogs) => {
        this.setState({ datsFromserver:blogs })
      })
      .catch(err => {
        console.log("Error No Hay Servidor")
    })

   } 

    handleAddDatsFromserver(datsLocal)
    {
      this.setState({
        datsFromserver: [...this.state.datsFromserver, datsLocal]
      })
    fetch('http://localhost:3200/insert?nombre='+datsLocal.name+'&description='+datsLocal.description+'&key=Ep0ooe44dw9bvxZvW38639MnuHfD91')
      .then((response) => {
            return 1;
      })
      .then((blogs) => {
        this.setState({ datsFromserver:blogs })
      })


      this.render(this);
    }

    finder(text)
    {
     if(text==='')
     this.setState({filtred:0});
     else{    
     this.setState({
      dastfiltred: this.state.datsFromserver.filter((e) => {
        return e.name === text
      }),
      filtred:1
    })
    }
  }
    

    
    render() {
     let indexBlog='';
       if(this.state.filtred===0)
          indexBlog=this.state.datsFromserver;
        else
          indexBlog=this.state.dastfiltred;
        const t=this.state.datsFromserver.length;
       const consolodidateBlog= <Cards todo={indexBlog}  Remove={this.removeDatsFromserver} />;
      
     
   return (
      <div className="App">
           <header className="App-header"> </header>
         <div className="container">
      <div className="col-md-15"  >
      <Filter onFinder={this.finder}></Filter>
      </div>   
        <div className="col mt-15">
       {consolodidateBlog}
        </div>
      <div className="col-md-15"  >
      <EntryForm onAddTodo={this.handleAddDatsFromserver}></EntryForm>
      </div>
       </div>
      </div>
    );
  }
}

export default App2;
