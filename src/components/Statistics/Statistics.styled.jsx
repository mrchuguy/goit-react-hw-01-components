import styled from 'styled-components';

export const StatSection = styled.section`
  border-radius: 5px;
  box-shadow: 2px 2px 5px #acb5be;
  overflow: hidden;
  background-color: #fff;
`;
export const Title = styled.h2`
  text-align: center;
  padding: 30px 0;
  text-transform: uppercase;
  font-size: 18px;
  color: #63676a;
`;
export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100px;
  padding: 15px 0;
  text-align: center;
  border: 1px solid #e7ecf2;
  background-color: #f3f6f9;
`;
export const Label = styled.span`
  color: #73787e;
`;
export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
`;
