import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 390px;
  background-color: #fff;
  color: #acb5be;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #acb5be;
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 40px;
  text-align: center;
`;

export const AvatarWrap = styled.div`
  margin: 0 auto 30px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #e7ecf2;
`;

export const UserName = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  list-style-type: none;
  display: flex;
  background-color: #f3f6f9;
`;

export const StatsItem = styled.li`
  flex-basis: 130px;
  border: 1px solid #e7ecf2;
  padding: 30px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: 400;
  margin-bottom: 5px;
  color: #63676a;
`;

export const Quantity = styled.span`
  color: #000;
  font-weight: 700;
`;
