import React from 'react';
import SelectSearch from 'react-select-search';

const optionWithNewProps = ({ func, parentId }) => (...mprops) => {
  const [props, option, snapshot, className] = mprops;
  const { name, index } = option;
  props.id = `${parentId ? `${parentId}_` : ''}${index}_${name}`;
  if (typeof Comp !== 'undefined') {
    return <div>{func(...mprops)}</div>;
  }
  return (
    <button {...props} className={className} type='button'>
      <span>{name}</span>
    </button>
  );
};

export default function ReactSelectSearch({ renderOption, id, ...props }) {
  return (
    <SelectSearch
      {...{ ...props, id }}
      renderOption={optionWithNewProps({ func: renderOption, parentId: id })}
    />
  );
}
