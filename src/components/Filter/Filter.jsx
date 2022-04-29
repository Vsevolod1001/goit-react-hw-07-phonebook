import { getFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { contactFilter } from 'redux/contactSlice';
import s from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.FilterDiv}>
      <label>
        Find contacts by name
        <input
          type="text"
          className={s.Inpfilter}
          onChange={e => dispatch(contactFilter(e.currentTarget.value))}
          value={filter}
          placeholder="Search.."
        />
      </label>
    </div>
  );
};
