let count = 0

const handleAddOne = () => {
    count++;
    renderCounterApp();
};

const handleMinusOne = () => {
    count--;
    renderCounterApp();
};

const handleReset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById("app");


const renderCounterApp = () => {
    const counterTemplate = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleAddOne}>+1</button>
            <button onClick={handleMinusOne}>-1</button>
            <button onClick={handleReset}>reset</button>
        </div>
    );
    ReactDOM.render(counterTemplate, appRoot)
}

renderCounterApp();