import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';
import UserDetails from '../../user/components/UserDetails';
import './PlaceList.css';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <ul className="place-list">
        {props.items.map(place => (
          <PlaceItem
            key={place.id}
            id={place.id}
            title={place.title}
            status={place.status}
            employeeID={place.employeeID}
            name={props.items.name}
            email={props.items.email}
            creatorId={place.creator}
            onDelete={props.onDeletePlace}
          />
        ))}
      </ul>
    </div>
    
  );
};

export default PlaceList;
