import React, { useState, useEffect } from 'react';
import {useTimeout} from './hooks/useTime'
import styled from 'styled-components';

const UI = styled.div`
    color: red
`

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  console.log(import.meta.env.MODE); // 环境变量 development
  useTimeout(() => setCount(count + 1), 1000);

  return (
    <div className="App">
      <header className="App-header">
        <UI>
          hello styled-components
        </UI>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <img src="/cun.jpg" style={{width: 200}} />
      </header>
    </div>
  );
}

export default App;
