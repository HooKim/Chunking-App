import {Link} from 'react-router-dom';
import React from 'react';

const Select = () => (
    <div>
        <Link to = '/practice'>
            <button>PRACTICE</button>
        </Link>
        <Link to = '/test'>
            <button>TEST</button>
        </Link> 
    </div>
);

export default Select;