import { useState } from 'react';

export const AddCatagory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('');

    const onInputChange = ({ target}) => {
        //console.log(target.value);
        setinputValue( target.value );
    }

    const onSubmit = (event ) => {
        event.preventDefault();
        //console.log(inputValue);
        if(inputValue.trim().length <= 1) return;

        //setCategories( categories => [ inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
};

