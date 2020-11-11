console.log("App.jsx is running!");

let app = {
    title: "Indecision App",
    subtitle: "Indecision info"
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
);

var user = {
    name: "Lucas Alves Da Silva",
    age: 29,
    location: "San Sebastian"
}

var myTemplate = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot)