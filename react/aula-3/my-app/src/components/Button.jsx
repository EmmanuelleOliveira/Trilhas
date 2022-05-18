import React from 'react';

function Button(props) {
  return (
    <button type='button' className={props.className}>{props.name}</button>
  );
}

export default Button;