import React, { Component } from 'react';

class Formcategory extends Component {
    constructor(props){
        super(props);
        this.state ={

        }
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
    render(){
        //creamos una const para obtener la posicion["0", "1", "2", "3", "4", "5"]
        const categoriePosition = Object.keys(this.props.categories);
        //console.log(categorySelect)
        return(
        <form>
            <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                    Busca tu evento por nombre o categoría
                </legend>
                <div className="uk-column-1-3@m uk-margin">
                    <div className="uk-margin" uk-margin="true">
                    <input className="uk-input" type="text" placeholder="Nombre de Evento o Ciudad" />

                    </div>
                    <div className="uk-margin" uk-margin="true">
                    
                    <select className="uk-select">
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

export default Formcategory;