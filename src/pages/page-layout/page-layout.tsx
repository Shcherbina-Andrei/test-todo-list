import {Outlet} from 'react-router-dom';
import Header from '../../components/header/header';
import './page-layout.scss';

function PageLayout(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Outlet />
      </main>
    </div>
  );
}

export default PageLayout;
