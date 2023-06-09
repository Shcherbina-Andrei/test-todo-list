import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import {deleteListAction} from '../../store/lists-data/action';
import { List } from '../../types/list';
import './list-card.scss';
import DeleteButton from '../controls/delete-task-button/delete-button';
import OpenListButton from '../controls/open-list-button/open-list-button';

type PropsType = {
  list: List;
}

function ListCard({list}: PropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const deleteButtonHandle = () => {
    dispatch(deleteListAction(list));
  };

  return (
    <article className="list-card">
      <div className="list-card__info">
        <h2 className="list-card__title">{list.title}</h2>
        <p className="list-card__numbers-of-tasks">Number of tasks: {list.tasks.length}</p>
      </div>
      <div className="list-card__controls">
        <Link className="list-card__link" to={`${AppRoute.Lists}/${list.id}`}>
          <OpenListButton />
        </Link>
        <DeleteButton handleDeleteButton={deleteButtonHandle} />
      </div>
    </article>
  );
}

export default ListCard;
