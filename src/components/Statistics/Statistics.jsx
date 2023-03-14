import PropTypes from 'prop-types';
import {Clause} from './Statistics.styled'

export const Statistics = ({ good, neutral, bad}) => {
  return (
    <>
      <Clause>
        Good: <span>{good}</span>
      </Clause>
      <Clause>
        Neutral: <span>{neutral}</span>
      </Clause>
      <Clause>
        Bad: <span>{bad}</span>
      </Clause>
      {/* <Clause>
      Total: <span>{total}</span>
      </Clause>
      <Clause>
      Positive feedback: <span>{positivePercentage}</span>%
      </Clause> */}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};