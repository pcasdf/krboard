import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import Keyboard from './components/Keyboard';

const App = () => {
  return (
    <div className="app">
      <Keyboard />
    </div>
  );
};

export default hot(App);
