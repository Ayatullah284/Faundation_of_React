/* console.log('React',React);
console.log('ReactDOM', ReactDOM); */


const domContainer = document.querySelector('#root');

/* const myElement = React.createElement('div', null, [
    React.createElement('p', null, 'Hello world'),
    React.createElement('p', null, 'Hello world'),
]); */


// ReactDOM.render(myElement, domContainer);


/* let p = document.createElement('p');
p.innerHTML = 'Hello world';
domContainer.appendChild(p); */

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    // console.log(reactState);
    return(
        <div>
            <h1 id="display">{counter}</h1>
            <div>
                <button id="button" onClick={() => setCounter(counter + 1)}>Increment +</button>
            </div>
        </div>
    )
}

/* const myElement = (
    <div>
        <h1 id="display">0</h1>
        <div>
            <button id="button">Increment +</button>
        </div>
    </div>
); */

ReactDOM.render(
    <div className="container">
        <Increment />
        <Increment />
        <Increment />
    </div>, 
    domContainer
);

/* let number = 0;

const button = document.querySelector('#button');
const display = document.querySelector('#display');

button.addEventListener('click', () => {
    number++ ;
    display.textContent = number;
}); */