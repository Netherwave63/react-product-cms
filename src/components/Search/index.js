import React from 'react';

const Search = ({
  // props
  value,
  setValue,
  placeholderText,
  style = {}
}) => {
  return (
    <div className='field' style={style}>
      <div className='control has-icons-left'>
        <input
          className='input'
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholderText}
          required
          style={{ width: '240px' }}
          type='text'
          value={value}
        />
        <span className="icon is-small is-left">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default Search;

