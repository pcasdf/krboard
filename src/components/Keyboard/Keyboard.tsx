import * as React from 'react';

import Key from '../Key';

import './Keyboard.scss';

const KEYS = [
  { keycode: 'q', english: 'q', hangul: 'ㅂ' },
  { keycode: 'w', english: 'w', hangul: 'ㅈ' },
  { keycode: 'e', english: 'e', hangul: 'ㄷ' },
  { keycode: 'r', english: 'r', hangul: 'ㄱ' },
  { keycode: 't', english: 't', hangul: 'ㅅ' },
  { keycode: 'y', english: 'y', hangul: 'ㅛ' },
  { keycode: 'u', english: 'u', hangul: 'ㅕ' },
  { keycode: 'i', english: 'i', hangul: 'ㅑ' },
  { keycode: 'o', english: 'o', hangul: 'ㅐ' },
  { keycode: 'p', english: 'p', hangul: 'ㅔ' },
  { keycode: 'a', english: 'a', hangul: 'ㅁ' },
  { keycode: 's', english: 's', hangul: 'ㄴ' },
  { keycode: 'd', english: 'd', hangul: 'ㅇ' },
  { keycode: 'f', english: 'f', hangul: 'ㄹ' },
  { keycode: 'g', english: 'g', hangul: 'ㅎ' },
  { keycode: 'h', english: 'h', hangul: 'ㅗ' },
  { keycode: 'j', english: 'j', hangul: 'ㅓ' },
  { keycode: 'k', english: 'k', hangul: 'ㅏ' },
  { keycode: 'l', english: 'l', hangul: 'ㅣ' },
  { keycode: 'z', english: 'z', hangul: 'ㅋ' },
  { keycode: 'x', english: 'x', hangul: 'ㅌ' },
  { keycode: 'c', english: 'c', hangul: 'ㅊ' },
  { keycode: 'v', english: 'v', hangul: 'ㅍ' },
  { keycode: 'b', english: 'b', hangul: 'ㅠ' },
  { keycode: 'n', english: 'n', hangul: 'ㅜ' },
  { keycode: 'm', english: 'm', hangul: 'ㅡ' },
];

const Keyboard = () => {
  return (
    <div className="keyboard">
      {KEYS.map(({ keycode, english, hangul }) => (
        <Key keycode={keycode} english={english} hangul={hangul} />
      ))}
    </div>
  );
};

export default Keyboard;
