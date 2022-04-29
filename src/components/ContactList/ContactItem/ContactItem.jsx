import s from './ContactItem.module.css';
export const ContactItem = ({ id, name, number, onDelete, isLoading }) => {
  return (
    <div>
      <li key={id} className={s.listCounterCircle}>
        <p className={s.listCircle}>
          {name}: {number}
        </p>

        <button type="button" className={s.BtnInput} onClick={onDelete}>
          {isLoading ? 'Deleting...' : 'delete'}
        </button>
      </li>
    </div>
  );
};
