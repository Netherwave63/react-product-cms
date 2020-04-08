import React from 'react';

const Entry = ({ 
  // props
  array,
  text
}) => {
  let info;
  if (array.length > 1) {
    info = "Showing " + array.length + " " + text + " entries";
  } else {
    info = "Showing " + array.length + " " + text + " entry";
  }
  return (
    <p className='entry-info'>{info}</p>
  );
};

export default Entry;