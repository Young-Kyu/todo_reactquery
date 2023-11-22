import styled from "styled-components";
export const S_Button = styled.button<S_ButtonProps>`

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width : ${({ size }) => size ? buttonWidthStyle[size] : buttonWidthStyle['m']};
  height : ${({ size }) => size ? buttonHeightStyle[size] : buttonHeightStyle['m']};
  padding : ${({ size }) => size ? buttonPadding[size] : buttonPadding['m']};
  background-color : ${({ backgroundColor }) => backgroundColor || 'skyblue'};
  color : ${({ backgroundColor }) => backgroundColor || '#FFF'};
  border : 1px solid ${({ backgroundColor }) => backgroundColor || 'skyblue'};
  border-radius: ${({ round }) => `${round}px` || 0};
  cursor: pointer;
  font-weight: 700;
`;

export interface S_ButtonProps {
  size?: TButtonSize;
  backgroundColor?: string;
  round?: number;
}

type TButtonSize = 's' | 'm' | 'l';

const buttonWidthStyle: { [key in TButtonSize]: string } = {
  s: '80px',
  m: '120px',
  l: '140px',
};

const buttonHeightStyle: { [key in TButtonSize]: string } = {
  s: '20px',
  m: '30px',
  l: '40px',
};

const buttonPadding: { [key in TButtonSize]: string } = {
  s: '10px 12px',
  m: '12px 18px',
  l: '14px 24px',
};