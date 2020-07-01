/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
  Be sure to adjust the `browserslist` field in your `package.json` file.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.
import './styles/styles.scss'
// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our top-level component.
import App from 'components/App'
import * as faceapi from 'face-api.js'
// Top-level classes on the body. Feel free to remove / change.
document.body.className = 'bg-black-80 fw4 white-80'

// Mount our app.
ReactDOM.render(
  <App />,
  document.querySelector('#app')
)

const test = document.getElementById('test')
test.style.backgroundImage = "url('66221.jpg')";
// const video = document.getElementById('video')
// console.log(faceapi.nets.tinyFaceDetector)

// Promise.all([
// 	faceapi.nets.tinyFaceDetector.loadFromUri('models'),
// 	faceapi.nets.faceLandmark68Net.loadFromUri('models'),
// 	faceapi.nets.faceRecognitionNet.loadFromUri('models'),
// 	faceapi.nets.faceExpressionNet.loadFromUri('models')
// 	]).then(startVideo)

// function startVideo(){
//     navigator.getUserMedia(
//       {video: {}},
//       stream => video.srcObject = stream,
//       err => console.error(err)
//     )
//   };

// video.addEventListener('play', () => { console.log('asdf')})