import React from 'react';
import ReactDOM from 'react-dom/client';

//Element
const reactElement = <h1>This is an React Element</h1>

//Component
const ReactComponent = () => {
   return <h1>This is an React Component</h1>
}

//For Rendering Element
ReactDOM.createRoot(document.getElementById('root'))
.render(reactElement);


//For Rendering Component
// ReactDOM.createRoot(document.getElementById('root'))
// .render(<ReactComponent/>);