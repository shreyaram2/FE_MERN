import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__info">
            <h2>Name: {props.name}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Employee ID: {props.employeeID}</h2>
            <h3>Enrolled for:  {props.placeCount} {props.placeCount === 1 ? 'Training' : 'Trainings'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
