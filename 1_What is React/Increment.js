/* console.log('React',React);
console.log('ReactDOM', ReactDOM); */


const domContainer = document.querySelector('#root');

/* const myElement = React.createElement('div', null, [
    React.createElement('p', null, 'Hello world'),
    React.createElement('p', null, 'Hello world'),
]); */


// ReactDOM.render(myElement, domContainer);


let p = document.createElement('p');
p.innerHTML = 'Hello world';
domContainer.appendChild(p);