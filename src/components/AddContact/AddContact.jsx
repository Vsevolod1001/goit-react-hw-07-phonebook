import s from './AddContact.module.css';
import { useState } from 'react';
import shortid from 'shortid';
import { useAddContactMutation } from 'redux/rtcQuery/rtcSlice';
import { Spinner } from 'components/Spinner';

export const AddContact = ({ contacts }) => {
  const [createContact, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const saveContact = name => {
    const newContact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (contacts.find(us => us.name === newContact.name)) {
      alert('контакт с таким именем уже существует');
      return;
    }
    createContact(newContact);
  };
  const hendleSubmit = e => {
    e.preventDefault();
    saveContact(name);
    setName('');
    setNumber('');
  };
  return (
    <div className={s.FormDivAdd}>
      <form onSubmit={hendleSubmit}>
        <label>
          Name
          <input
            className={s.InputAdd}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
        </label>
        <label>
          Number
          <input
            className={s.InputAdd}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </label>
        <button className={s.BtnInput} type="submit">
          {isLoading ? <Spinner /> : 'ADD'}
        </button>
      </form>
    </div>
  );
};
