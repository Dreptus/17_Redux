import style from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnRedux';



const ColumnForm = (props) => {

     const [title, setTitle] = useState('');
     const [icon, setIcon] = useState('');

     const listId = props.listId

     const dispatch = useDispatch();

     const handleSubmit = e => {
          e.preventDefault();
          dispatch(addColumn({ title, icon, listId }));
          setTitle('');
          setIcon('')
     }

     return (
          <form onSubmit={handleSubmit} className={style.columnForm}>
               <span className={style.inputName}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
               <span className={style.inputName}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
               <Button>Add column</Button>
          </form>
     );
};

export default ColumnForm;