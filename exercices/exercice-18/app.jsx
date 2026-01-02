
import React from 'react';

function App() {
  const [titleColor, setTitleColor] = React.useState(null);

  return (
    <div id="app">
      <h1 className={titleColor}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setTitleColor('highlight-green')}>Yes</button>
        </li>
        <li>
          <button onClick={() => setTitleColor('highlight-red')}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;

