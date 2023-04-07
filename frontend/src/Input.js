import React from 'react';
import './Input.css';

export default function BasicExample(props) {


  return (
    <div class="container">
      <div class="input-container">
        <textarea onChange={({target})=>props.setText(target.value)} value={props.text} type="text" placeholder="Type your message..."></textarea>
      </div>
    </div>
  );
}