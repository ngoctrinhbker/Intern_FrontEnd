

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title= `you click ${count} times`
    });
        return ( 
            <div>
            <h2> { count } </h2> 
            <button onClick={() => setCount(count + 1)}> INCREASE</button > 
            </div>
        );
    }