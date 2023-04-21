import React from 'react';
import './button.scss';

type propsType = {
  children: React.ReactNode;
  handleAction?: () => void;
  styleClass?: string;
}

function Button({children, handleAction, styleClass}: propsType): JSX.Element {
  return (
    <button className={`common__button ${styleClass ? styleClass : ''}`} type="button" onClick={handleAction}>
      {children}
    </button>
  );
}

export default Button;
