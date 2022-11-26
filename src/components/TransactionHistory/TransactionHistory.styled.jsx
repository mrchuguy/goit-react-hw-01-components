import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #acb5be;
  border: 1px solid #e7ecf2;
  overflow: hidden;
  background-color: #fff;
`;
export const TableHead = styled.thead`
  & th {
    background-color: #00bcd5;
    text-transform: uppercase;
    color: #fff;
    padding: 15px 0;
    min-width: 300px;
    border: 1px solid #e7ecf2;
  }
`;
export const TableBody = styled.tbody`
  & td {
    border: 1px solid #e7ecf2;
    text-align: center;
    color: #505357;
    padding: 8px 0;
  }

  & tr:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;
