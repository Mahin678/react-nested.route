import React from 'react';

const Hello = (props) => {
    const values = props.values;
    let hi = (values) ? <p>Hello My Friend</p>
        :
        <p>Hello who are you ?  </p>;
    return (
        <div>
            {
                hi
            }
        </div>
    );
};

export default Hello;