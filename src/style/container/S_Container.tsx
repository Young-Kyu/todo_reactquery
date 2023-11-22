import styled from "styled-components";

export const S_ContainerWrap = styled.div<S_ContainerWrapProps>`
  padding : ${({ padding }) => padding ? padding : '0px'};
  width : 100%;
`
export interface S_ContainerWrapProps {
  padding?: string;
}

export const S_FlexBox = styled.div<SFlexBoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  gap: ${({ gap }) => `${gap}px` || `0px`};
  height: ${({ height }) => `${height}` || 'auto'};
  width: ${({ width }) => `${width}` || `auto`};
`;

export interface SFlexBoxProps {
  flexDirection?: 'row' | 'column';
  justifyContent?: 'center' | "space-between";
  alignItems?: 'center';
  gap?: number;
  width?: `${number}${'%' | 'px'}`;
  height?: `${number}${'%' | 'px'}`;
}

export const S_Spacer = styled.div<{ x?: number; y?: number }>`

  width : ${({ x }) => `${x}px` || '0px'};
  height : ${({ y }) => `${y}px` || '0px'};

`;