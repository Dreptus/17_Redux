import style from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';


const ListForm = () => {

     const [title, setTitle] = useState('');
     const [description, setDescription] = useState('');

     const dispatch = useDispatch();

     const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(addList({ title, description }));
          setTitle('');
          setDescription('')
     }

     return (
          <form onSubmit={handleSubmit} className={style.columnForm}>
               <span className={style.inputName}>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
               <span className={style.inputName}>Description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
               <Button>Add column</Button>
          </form>
     );
}

export default ListForm;