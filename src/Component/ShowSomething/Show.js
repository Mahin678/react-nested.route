import React from 'react';
import { Link as a } from 'react-router-dom';

const Show = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </div>
    );
};

export default Show;