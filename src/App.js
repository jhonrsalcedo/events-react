import React, { Component } from 'react';
import Header from './components/Header';
import Formcategory from './components/Formcategory';


// cosumimos la api eventbrite www.eventbrite.com
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        categoriesResp:[]
      }
  }
    token = 'AC6B2UWEROHM2XESUDY7'
  componentDidMount(){
    this.getCategory();
  }

  //utilizamos el async
  // getCategory = async () =>{
  //     let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

  //     await fetch(url)
  //       .then(response =>{
  //         return response.json();
  //       })
  //       .then(categories =>{
  //         console.log(categories)
  //       })
  // }

  // otra forma de utilizar async await
  getCategory = async () =>{
    const url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
    const response = await fetch(url)
    const categoriesResp = await response.json()
      //console.log(categoriesResp.categories) 
      this.setState({
        categoriesResp: categoriesResp.categories
      })
      
  }

  render() {
    return (
      <div className="App">
        <Header
          title ='Eventos'
        />
        <Formcategory 
          categories ={this.state.categoriesResp}
        />
      </div>
    );
  }
}

export default App;
