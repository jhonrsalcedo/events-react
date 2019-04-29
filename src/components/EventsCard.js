import React, {Component} from 'react';
import Events from './Events';

class EventsCard extends Component {
    render(){
        return(
            <div className="uk-child-width-1-4@m" uk-grid="true">
                {Object.keys(this.props.eventsCards).map(key =>(
                    <Events
                    key={key}
                        info={this.props.eventsCards[key]}
                    />
                ))}
            </div>
        )
    }
}

export default EventsCard;