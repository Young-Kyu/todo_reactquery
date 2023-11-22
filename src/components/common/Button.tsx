import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { S_Button, S_ButtonProps } from '../../style/button/S_Button';

interface ButtonProps<T> {

  onClickHandler: (data?: T) => void;
  children: string | JSX.Element;
  style?: S_ButtonProps;
}


const Button = <T extends any>(props: ButtonProps<T>): JSX.Element => {

  const { onClickHandler, children, style, ...rest } = props;

  return (
    <S_Button
      onClick={() => onClickHandler()}
      {...style}
      {...rest}
    >
      {children}
    </S_Button>
  );


}
export default Button;