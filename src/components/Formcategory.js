import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formcategory extends Component {
    constructor(props){
        super(props);
        this.state ={
            nameValue:'',
            categoryValue:''
        }
    }

    //creamos un metodo findEvents
    findEvent = (e) => {
        e.preventDefault();

        //creamos el objeto 
        const dataEvent = this.state
       
        //console.log(dataEvent);

        //y lo pasamos por props a App.js
            this.props.getEvent(dataEvent);

    }


    //de esta forma podremos ver las key 
    showOptions = (key) =>{
        //console.log(key)
        const categoriesShow = this.props.categories[key];
        //console.log(categoriesShow);
            //destructuring 
            const {id, name_localized} = categoriesShow;

            if(!id || !name_localized) return null;

            return(
                <option key={id} value={id} >
                    {name_localized}
                </option>
            )

    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        //creamos una const para obtener la posicion["0", "1", "2", "3", "4", "5"]
        const categoriePosition = Object.keys(this.props.categories);
        //console.log(categorySelect)
        return(
        <form onSubmit={this.findEvent}>
            <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                    Busca tu evento por nombre o categoría
                </legend>
                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                    <input className="uk-input" type="text" placeholder="Nombre de Evento o Ciudad" name="nameValue" onChange={this.handleChange} value={this.state.nameValue}/>

                    </div>
                    <div className="uk-margin" uk-margin="true">
                    
                    <select className="uk-select" name="categoryValue" onChange={this.handleChange} value={this.state.categoryValue}>
                        {categoriePosition.map(this.showOptions)}
                    </select>

                    </div>
                    <div className="uk-margin" uk-margin="true">
                   
                        <button className="uk-button uk-button-danger">Buscar</button>
                    </div>
                </div>
            </fieldset>
                    
        </form>
            
        );
    };

}
Formcategory.propTypes = {
    getEvent: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}
export default Formcategory;