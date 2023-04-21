import { FilterTypes } from '../../const';
import { useAppSelector } from '../../hooks';
import { getCurrentFilterType } from '../../store/app-process/selectors';
import {Tasks} from '../../types/task';
import { filterTasks } from '../../utils/filter-tasks';
import { getNoTasksDescription } from '../../utils/get-no-tasks-descriptions';
import DragAndDropList from '../drag-and-drop-list/drag-and-drop-list';
import './tasks-list.scss';

type TasksListProps = {
  tasks: Tasks;
}

function TasksList({tasks}: TasksListProps): JSX.Element {
  const currentFilterType = useAppSelector(getCurrentFilterType);

  if (tasks.length === 0) {
    return (
      <p className="tasks__empty-list">{getNoTasksDescription(FilterTypes.All)}</p>
    );
  }

  const currentTasks = filterTasks(tasks, currentFilterType);

  if (currentTasks.length === 0) {
    return (
      <p className="tasks__empty-list">{getNoTasksDescription(currentFilterType)}</p>
    );
  }

  return (
    <DragAndDropList tasks={currentTasks} />
  );
}

export default TasksList;
