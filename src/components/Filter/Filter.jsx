import { FilterBlock, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterBlock>
      Find contact by name
      <FilterInput type="text" value={value} onChange={onChange}></FilterInput>
    </FilterBlock>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
