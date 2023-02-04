import { useState, useReducer, FormEvent } from 'react';
import { ActionType } from './actionTypes';
import Modal from './Modal';
import { reducer, initialState } from './reducer';
function Index() {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) {
      dispatch({ type: ActionType.NO_VALUE });
      return;
    }

    const person = { id: new Date().getTime().toString(), name };
    dispatch({ type: ActionType.ADD_ITEM, payload: person });
  };

  const removeItem = (id: string) => {
    dispatch({ type: ActionType.REMOVE_ITEM, payload: id });
  };

  const closeResultModal = () => {
    dispatch({ type: ActionType.CLOSE_MODAL });
  };

  return (
    <>
      {state.isResultModalOpen && (
        <Modal
          closeResultModal={closeResultModal}
          modalContent={state.modalContent}
        />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button onClick={() => removeItem(person.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}

export default Index;
