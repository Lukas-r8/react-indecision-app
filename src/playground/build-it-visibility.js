
let showDetails = true;

const onDetailsClick = () => {
    showDetails = !showDetails
    renderVisibilityApp();
};

const renderVisibilityApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onDetailsClick}> {showDetails ? "Hide Details" : "Show Details"}</button>
            {showDetails && <p>Details presented here</p>}
        </div>
    );

    ReactDOM.render(template, document.getElementById("app"))
};

renderVisibilityApp();