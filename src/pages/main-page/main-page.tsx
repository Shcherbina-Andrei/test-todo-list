import ListOfLists from '../../components/list-of-lists/list-of-lists';
import './main-page.scss';

function MainPage(): JSX.Element {
  return (
    <>
      <h2 className="main-page__title">My lists</h2>
      <ListOfLists />
    </>
  );
}

export default MainPage;
