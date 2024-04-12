import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit site'
// };

const anotherElement=(
  <a href="https:/google.com" target='_blank'>visit google</a>
);

const reactElement = React.createElement(
   'a',{href: 'https://google.com',target:'_blank'},
   'click me bro'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
