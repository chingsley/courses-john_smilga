import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import { Item } from './interface/Item';
import { useCallback } from 'react';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (!list) return [];
  return (list = JSON.parse(localStorage.getItem('list')!));
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState<Item[]>(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState<string | null>(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const showAlert = (show: boolean, type: string, msg: string) => {
    setAlert({ show, type, msg });
  };

  const removeAlert = useCallback(() => {
    showAlert(false, '', '');
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name) return showAlert(true, 'danger', 'please enter a value');

    if (isEditing) {
      setList(list.map(item => {
        if (item.id === editID) return { ...item, title: name };
        return item;
      }));
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id: string) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter(item => item.id !== id));
  };

  const editItem = (id: string) => {
    const item = list.find(itm => itm.id === id);
    if (!item) return;

    setIsEditing(true);
    setEditID(item.id);
    setName(item.title);
  };


  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={removeAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'Save' : 'Add'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
