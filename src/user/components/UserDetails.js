import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserDetails = props => {
  const { isLoading } = useHttpClient();

  return (
    <React.Fragment>
      <ul>
        <li className="user-item">
            <Card className="place-item__content">
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.email}</h3>
                <p>{props.employeeID}</p>
            </div>
            </Card>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default UserDetails;
