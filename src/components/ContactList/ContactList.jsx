// import { useSelector } from 'react-redux';
// import { getFilter } from 'redux/selectors';
import { ContactItem } from './ContactItem/ContactItem';
import { useDeleteContactMutation } from 'redux/rtcQuery/rtcSlice';
export const ContactList = ({ contacts }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  // const filter = useSelector(getFilter);

  // const visible = contacts.filter(us =>
  //   us.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <div>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={deleteContact}
            isLoading={isLoading}
          />
        ))}
    </div>
  );
};
