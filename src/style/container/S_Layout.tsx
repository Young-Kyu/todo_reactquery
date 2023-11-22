import styled from "styled-components";

export const S_RootLayout = styled.div`
  width : 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const S_SideMenu = styled.aside`
  width : 25%;
  max-width: 240px;
  height: calc(100vh - 55px);
  border-right : 1px solid blue;
`

export const S_Table = styled.table`
  width : '100%';
  border : 1px solid grey;
  border-collapse: collapse;
  & th {
    text-align: left;
  }
`

export const S_TableTh = styled.th<{ width: `${number}${'px' | '%'}`, padding?: string }>`
   width : ${({ width }) => width || 'auto'};
   padding : ${({ padding }) => padding || '12px 16px'};
`

export const S_TableTd = styled.td<{ padding?: string }>`
   padding : ${({ padding }) => padding || '12px 16px'};
`

export const S_TableRow = styled.tr<S_TableRowProps>`
  width : ${({ width }) => width || 'auto'};
  height : ${({ height }) => height || 'auto'};
  border-bottom : ${({ borderBottom }) => borderBottom ? '1px solid #DEDEDE' : ''};
  cursor: pointer;
  &:hover { 
    background-color : ${({ onHover }) => onHover !== false ? '#DEDEDE' : 'inherit'};;
  }
`;

export interface S_TableRowProps {
  width?: string;
  height?: `${number}${'px' | '%'}`;
  borderBottom?: boolean;
  onHover?: boolean;
}

export const S_PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap : 12px;
  justify-content: flex-end;
  align-items: center;
  margin-top : 20px;
  padding-right: 36px;
`;

export const S_PaginationDirection = styled.span`
 cursor: pointer; 
 padding: '5px';
 margin: '5px';
 font-weight: 600;
`;

export const S_PaginationNumber = styled.span<{ isCurrentPage: boolean }>`
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  border: ${({ isCurrentPage }) => isCurrentPage ? '1px solid #000' : 'none'};
  border-radius: 3px;
  font-weight: ${({ isCurrentPage }) => isCurrentPage ? '900' : '500'};
`;


