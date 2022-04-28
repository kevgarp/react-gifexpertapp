import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleChangeInput = (e) => setInputValue(e.currentTarget.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length> 2 ) {
            setCategories( categories => [inputValue, ...categories, ]);
            setInputValue('');
        }
    };

  return (
      <form onSubmit={ handleSubmit }>
        <input 
            type='text'
            value={ inputValue }
            onChange={ (handleChangeInput) }
        />
      </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
