
const parent = React.createElement('div', {id:'parent'}, [
    React.createElement('div', {id:'child', key:"1"}, [
        React.createElement('h1', {key:"2"}, ['I am H1']),
        React.createElement('h2', {key:"3"}, ['I am H2'])
    ]),
    React.createElement('div', {id:'child2', key:"4"}, [
        React.createElement('h3', {key:"5"}, ['I am H3']),
        React.createElement('h4', {key:"6"}, ['I am H4'])
    ])
]);

ReactDOM.createRoot(document.getElementById('root'))
.render(parent);
