import SearchingTask from '../searching-task/searching-task';
import './header.scss';
import Logo from '../logo/logo';

function Header(): JSX.Element {

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <SearchingTask />
      </div>
    </header>
  );
}

export default Header;

