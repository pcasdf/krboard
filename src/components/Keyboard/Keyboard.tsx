import * as React from 'react';

import Key from '../Key';

import './Keyboard.scss';

const keys = [
  {keycode: 'a', english: 'a', hangul: 'ㅁ'},
  {keycode: 'b', english: 'b', hangul: 'ㅠ'},
  {keycode: 'c', english: 'c', hangul: 'ㅊ'},
  {keycode: 'd', english: 'd', hangul: 'ㅇ'},
  {keycode: 'e', english: 'e', hangul: 'ㄷ'},
  {keycode: 'f', english: 'f', hangul: 'ㄹ'},
  {keycode: 'g', english: 'g', hangul: 'ㅎ'},
  {keycode: 'h', english: 'h', hangul: 'ㅗ'},
  {keycode: 'i', english: 'i', hangul: 'ㅑ'},
  {keycode: 'j', english: 'j', hangul: 'ㅓ'},
  {keycode: 'k', english: 'k', hangul: 'ㅏ'},
  {keycode: 'l', english: 'l', hangul: 'ㅣ'},
  {keycode: 'm', english: 'm', hangul: 'ㅡ'},
  {keycode: 'n', english: 'n', hangul: 'ㅜ'},
  {keycode: 'o', english: 'o', hangul: 'ㅐ'},
  {keycode: 'p', english: 'p', hangul: 'ㅔ'},
  {keycode: 'q', english: 'q', hangul: 'ㅂ'},
  {keycode: 'r', english: 'r', hangul: 'ㄱ'},
  {keycode: 's', english: 's', hangul: 'ㄴ'},
  {keycode: 't', english: 't', hangul: 'ㅅ'},
  {keycode: 'u', english: 'u', hangul: 'ㅕ'},
  {keycode: 'v', english: 'v', hangul: 'ㅍ'},
  {keycode: 'w', english: 'w', hangul: 'ㅈ'},
  {keycode: 'x', english: 'x', hangul: 'ㅌ'},
  {keycode: 'y', english: 'y', hangul: 'ㅛ'},
  {keycode: 'z', english: 'z', hangul: 'ㅋ'},
];

const Keyboard = () => {
  return (
    <div className="keyboard">
      <Key />
    </div>
  );
};

export default Keyboard;
