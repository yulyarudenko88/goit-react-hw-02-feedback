import PropTypes from 'prop-types';
import { List, Button } from './OptionList.styled';

export const OptionsList = ({ options, handleFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={() => handleFeedback(option)}>{option}</Button>
          </li>
        );
      })}
    </List>
  );
};

OptionsList.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};