console.log("App.jsx is running!");
// babel src/app.js --out-file public/scripts/app.js --presets=env,react --watch
const app = {
    title: "Indecision App",
    subtitle: "Indecision info",
    options: []
};

// console.log(app.options?.lenght);

const onFormSubmit = (e) => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
    }

    renderApp();
}

const resetOptions = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNumber])
}

const appRoot = document.getElementById("app");

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options available"}</p>
            <p>You have {app.options.length} options.</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do now?</button>
            <button  onClick={resetOptions}>Reset options</button>
            <ol>
                {app.options.map((option, index) => <li key={index}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();