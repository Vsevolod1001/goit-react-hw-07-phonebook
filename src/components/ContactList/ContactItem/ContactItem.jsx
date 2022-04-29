import { Spinner } from 'components/Spinner';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/rtcQuery/rtcSlice';

export const ContactItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <div>
      <li key={id} className={s.listCounterCircle}>
        <p className={s.listCircle}>
          {name}: {number}
        </p>

        <button
          type="button"
          className={s.BtnInput}
          onClick={() => deleteContact(id)}
        >
          {isLoading ? <Spinner /> : 'delete'}
        </button>
      </li>
    </div>
  );
};
