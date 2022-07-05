import style from './List.module.scss';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm';
import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnRedux';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';

const List = () => {

     const { listId } = useParams();

     const listData = useSelector((state) => getListById(state, listId));
     const columns = useSelector((state) => getColumnsByList(state, listId));

     if(!listData) return <Navigate to="/" />
     return (
          <div className={style.list}>
               <header className={style.header}>
                    <h2 className={style.title}>{listData.title}</h2>
               </header>
               <p className={style.description}>{listData.description}</p>
               <SearchForm />
               <section className={style.columns}>
                    {columns.map(column =>
                    <Column
                         key={column.id}
                         {...column}  />
                    )}
               </section>
               <ColumnForm listId={listId}/>
          </div>
     );
};

export default List;