import React, {ReactNode} from 'react';

interface FieldsetProps{
    legend:string,
    children:ReactNode
}

const Fieldset = ({legend,children}:FieldsetProps) => {
    return (
        <fieldset style={{marginInline:'15px'}}>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    );
};

export default Fieldset;