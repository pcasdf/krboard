import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Key from './components/Key';

const App = () => {
  return (
    <div className="app">
      <Key />
    </div>
  );
};

export default hot(App);
