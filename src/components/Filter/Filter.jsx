import { FilterBlock, FilterInput } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <FilterBlock>
      Find contact by name
      <FilterInput type="text" value={value} onChange={onChange}></FilterInput>
    </FilterBlock>
  );
};
