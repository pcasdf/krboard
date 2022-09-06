import * as React from 'react';

import './Key.scss';

interface KeyProps {
  keycode: string;
  english: string;
  hangul: string;
}

const Key = ({ keycode, english, hangul }: KeyProps) => (
  <div className="key">
    <span className="english-char">{english}</span>
    <span className="hangul-char">{hangul}</span>
  </div>
);

export default Key;
