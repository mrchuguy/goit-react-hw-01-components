import PropTypes from 'prop-types';
import {
  Label,
  Percentage,
  StatItem,
  StatList,
  StatSection,
  Title,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
