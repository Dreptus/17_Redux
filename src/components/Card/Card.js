import style from './Card.module.scss';
import clsx from 'clsx';
// import { toggleCardFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { deleteCard } from '../../redux/cardsRedux';

const Card = (props) => {

     const cardId = props.cardId;
     const [favoriteValue, setFavoriteValue] = useState(props.isFavorite)

     const dispatch = useDispatch();

     const handleClick = (e) => {
          e.preventDefault();
          setFavoriteValue(!favoriteValue)
          dispatch(toggleCardFavorite(cardId));
     };

     const handleClickDelete = (e) => {
          e.preventDefault();
          dispatch(deleteCard(cardId));
     };

     return (
          <li className={style.card}>{props.title}
               <div>
                    <button onClick={handleClick} className={clsx(style.button, props.isFavorite && style.isActive)}>
                         <span className={'fa fa-star-o'} />
                    </button>
                    <button onClick={handleClickDelete} className={style.button_trash}>
                         <span className={'fa fa-trash'} />
                    </button>
               </div>
          </li>
     );
}

export default Card;