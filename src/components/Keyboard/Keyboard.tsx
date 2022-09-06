import * as React from 'react';

import Key from '../Key';

import './Keyboard.scss';

const KEYS = {
  a: { keycode: 'a', english: 'a', hangul: 'ㅁ' },
  b: { keycode: 'b', english: 'b', hangul: 'ㅠ' },
  c: { keycode: 'c', english: 'c', hangul: 'ㅊ' },
  d: { keycode: 'd', english: 'd', hangul: 'ㅇ' },
  e: { keycode: 'e', english: 'e', hangul: 'ㄷ' },
  f: { keycode: 'f', english: 'f', hangul: 'ㄹ' },
  g: { keycode: 'g', english: 'g', hangul: 'ㅎ' },
  h: { keycode: 'h', english: 'h', hangul: 'ㅗ' },
  i: { keycode: 'i', english: 'i', hangul: 'ㅑ' },
  j: { keycode: 'j', english: 'j', hangul: 'ㅓ' },
  k: { keycode: 'k', english: 'k', hangul: 'ㅏ' },
  l: { keycode: 'l', english: 'l', hangul: 'ㅣ' },
  m: { keycode: 'm', english: 'm', hangul: 'ㅡ' },
  n: { keycode: 'n', english: 'n', hangul: 'ㅜ' },
  o: { keycode: 'o', english: 'o', hangul: 'ㅐ' },
  p: { keycode: 'p', english: 'p', hangul: 'ㅔ' },
  q: { keycode: 'q', english: 'q', hangul: 'ㅂ' },
  r: { keycode: 'r', english: 'r', hangul: 'ㄱ' },
  s: { keycode: 's', english: 's', hangul: 'ㄴ' },
  t: { keycode: 't', english: 't', hangul: 'ㅅ' },
  u: { keycode: 'u', english: 'u', hangul: 'ㅕ' },
  v: { keycode: 'v', english: 'v', hangul: 'ㅍ' },
  w: { keycode: 'w', english: 'w', hangul: 'ㅈ' },
  x: { keycode: 'x', english: 'x', hangul: 'ㅌ' },
  y: { keycode: 'y', english: 'y', hangul: 'ㅛ' },
  z: { keycode: 'z', english: 'z', hangul: 'ㅋ' },
  backtick: { keycode: '`', english: '`', hangul: '`' },
  one: { keycode: '1', english: '1', hangul: '1' },
  two: { keycode: '2', english: '2', hangul: '2' },
  three: { keycode: '3', english: '3', hangul: '3' },
  four: { keycode: '4', english: '4', hangul: '4' },
  five: { keycode: '5', english: '5', hangul: '5' },
  six: { keycode: '6', english: '6', hangul: '6' },
  seven: { keycode: '7', english: '7', hangul: '7' },
  eight: { keycode: '8', english: '8', hangul: '8' },
  nine: { keycode: '9', english: '9', hangul: '9' },
  zero: { keycode: '0', english: '0', hangul: '0' },
  hyphen: { keycode: '-', english: '-', hangul: '-' },
  equals: { keycode: '=', english: '=', hangul: '=' },
  openBracket: { keycode: '[', english: '[', hangul: '[' },
  closeBracket: { keycode: ']', english: ']', hangul: ']' },
  backslash: { keycode: '\\', english: '\\', hangul: '\\' },
  semicolon: { keycode: ';', english: ';', hangul: ';' },
  quote: { keycode: '\'', english: '\'', hangul: '\'' },
  comma: { keycode: ',', english: ',', hangul: ',' },
  period: { keycode: '.', english: '.', hangul: '.' },
  slash: { keycode: '/', english: '/', hangul: '/' },
  tab: { keycode: null, english: null, hangul: null },
  backspace: { keycode: null, english: null, hangul: null },
  capslock: { keycode: null, english: null, hangul: null },
  leftShift: { keycode: null, english: null, hangul: null },
  rightShift: { keycode: null, english: null, hangul: null },
  enter: { keycode: null, english: null, hangul: null },
  leftCtrl: { keycode: null, english: null, hangul: null },
  rightCtrl: { keycode: null, english: null, hangul: null },
  leftOpt: { keycode: null, english: null, hangul: null },
  rightOpt: { keycode: null, english: null, hangul: null },
  leftGui: { keycode: null, english: null, hangul: null },
  rightGui: { keycode: null, english: null, hangul: null },
  spacebar: { keycode: null, english: null, hangul: null },
};

const Keyboard = () => {
  return (
    <div className="keyboard">
      {/* {KEYS.map(({ keycode, english, hangul }) => (
        <Key keycode={keycode} english={english} hangul={hangul} />
      ))} */}
    </div>
  );
};

export default Keyboard;
