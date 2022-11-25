import {
  AvatarWrap,
  Description,
  Label,
  Location,
  ProfileCard,
  Quantity,
  StatsItem,
  StatsList,
  Tag,
  UserName,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <AvatarWrap>
          <img src={avatar} alt="User avatar" className="avatar" />
        </AvatarWrap>
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};
