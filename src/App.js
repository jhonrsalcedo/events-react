import React, { Component } from 'react';
import Header from './components/Header';
import Formcategory from './components/Formcategory';


// cosumimos la api eventbrite www.eventbrite.com
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        categoriesResp:[],
        eventResp:[]
      }
  }
    token = 'AC6B2UWEROHM2XESUDY7';
    order ='date';
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

  //https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&categories=101&token=AC6B2UWEROHM2XESUDY7

  //https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&categories=101&token=AC6B2UWEROHM2XESUDY7
  getCategory = async () =>{
    let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
    const response = await fetch(url)
    const categoriesResp = await response.json()
      //console.log(categoriesResp.categories) 
      this.setState({
        categoriesResp: categoriesResp.categories
      })
      
  }
  //obtener evento del formulario
  getEvent = async (searchEvent) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${searchEvent.nameValue}&sort_by=date&categories=${searchEvent.categoryValue}&token=AC6B2UWEROHM2XESUDY7`;
    const response = await fetch(url)
    const eventResp = await response.json()
    this.setState({
      eventResp: eventResp.events
    })
//console.log(eventResp.events)
  }

  render() {
    return (
      <div className="App">
        <Header
          title ='Eventos'
        />
        <div className="uk-container">
        <Formcategory 
          categories ={this.state.categoriesResp}
          getEvent ={this.getEvent}
        />

        </div>
       
      </div>
    );
  }
}

export default App;
