console.log("App.jsx is running!");
// babel src/app.jsx --out-file public/scripts/app.js --presets=env,react --watch
const app = {
    title: "Indecision App",
    subtitle: "Indecision info",
    options: []
};

// console.log(app.options?.lenght);

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options:" : "No options available"}</p>
        <ol>
            {app.options.map((option, index) => <li key={index}>{option}</li>)}
        </ol>
    </div>
);

const user = {
    name: "Lucas Alves Da Silva",
    age: 29,
    location: "San Sebastian"
};

function getLocation(location) {
    return (location != null) ? <p>Location: {location}</p> : undefined;
}

const myTemplate = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot)