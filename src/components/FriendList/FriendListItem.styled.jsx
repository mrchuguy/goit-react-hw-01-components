import styled from 'styled-components';

export const ListItem = styled.li`
  border-radius: 5px;
  min-width: 250px;
  padding: 5px 10px;
  box-shadow: 2px 2px 5px #acb5be;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Status = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 80px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
