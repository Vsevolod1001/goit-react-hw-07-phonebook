import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { ContactItem } from './ContactItem/ContactItem';
export const ContactList = ({ contacts }) => {
  const filter = useSelector(getFilter);
  console.log(contacts);
  const visible = contacts?.filter(us =>
    us.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {contacts &&
        visible.map(({ id, name, number }) => (
          <ContactItem key={id} name={name} number={number} id={id} />
        ))}
    </div>
  );
};
