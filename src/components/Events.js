import React from 'react';
import PropTypes from 'prop-types';


const Events = (props) =>{
//Destructuring
const {name} = props.info;
//se le da una condicion si no existe name return null
if(!name) return null;

   // console.log(props.info)
   //recortamos la description de eventos a 250 caracteres
//    let desc = props.info.description.text;

//     if(desc.length > 250){
//         desc = desc.substr(0, 250);
//     }
    return(
        <div>
            <div className="uk-card uk-card-default">
                {/* necesitamos llamar la img url para mostrarla */}
                    <div className="uk-card-media-top ">
                    {/* en caso que no exista el logo realizamos un condicional if si y ? entonces */}
                    {props.info.logo !== null ?
                    <img className="uk-align-center" src={props.info.logo.url} alt={props.info.name.text} />
                    : ''
                    }
                    
                    </div>
                    <div className="uk-card-body">
                    <h3 className="uk-card-title">{props.info.name.text}</h3>
                        <p>{props.info.summary}</p>
                    </div>
                    <div className="uk-card-footer">
                        <a className="uk-button uk-button-secondary" href={props.info.url} target="_blank" rel="noopener noreferrer">
                        ver mas </a>
                    </div>
            </div>
        </div>
    )
}

//documentamos por Proptypes
Events.propTypes={
    info: PropTypes.object.isRequired
}
export default Events;