import React from 'react';


const style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
input:focus { background: blue; }
.animated {
  background: green;
  width: 100%;
  height: 20px;
  position:relative;
}
.animated:after {
  position:absolute;
  height: 100%;
  content: '';
  background-color: red;
  animation-name: progress;
  animation-duration: 1s;
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
`;
      

export default {
  title: 'Button',
};

export const animation = () => <div className="animated"></div>;
animation.story = {
  parameters: { chromatic: { pauseAnimationAtEnd: true } }
}

export const input = () => (
  <input type="text" value="input" autoFocus/>
);
