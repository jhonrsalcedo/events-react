import React, {Component} from 'react';
import Events from './Events';
import PropTypes from 'prop-types';

class EventsCard extends Component {
    render(){
        return(
            <div className="uk-child-width-1-3@m" uk-grid="true">
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

EventsCard.propTypes = {
    eventsCards: PropTypes.array.isRequired
}
export default EventsCard;