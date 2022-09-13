import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceForm.css';

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      status: {
        value: '',
        isValid: false
      },
      employeeID: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const placeSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(
        'http://localhost:5000/api/places',
        'POST',
        JSON.stringify({
          title: formState.inputs.title.value,
          status: formState.inputs.status.value,
          employeeID: formState.inputs.employeeID.value,
          creator: auth.userId
        }),
        { 'Content-Type': 'application/json' }
      );
      history.push('/');
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="status"
          element="textarea"
          label="status"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid status (completed or not completed)."
          onInput={inputHandler}
        />
        <Input
          id="employeeID"
          element="input"
          label="EmployeeID"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid employeeID."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD TRAINING
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewPlace;
