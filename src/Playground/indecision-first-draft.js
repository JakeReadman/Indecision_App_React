const appObject = {
  title: 'Indecision App',
  subtitle: 'First React app, this is dull right now',
  options: [],
};

const formSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    appObject.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const removeAll = () => {
  appObject.options = [];
  renderTemplate();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * appObject.options.length);
  const option = appObject.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div>
      <h1>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
      <p>
        {appObject.options.length > 0 ? `Here are your options:` : 'No options'}
      </p>
      <button disabled={appObject.options.length === 0} onClick={makeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {appObject.options.map((option, idx) => {
          return <li key={idx}>{option}</li>;
        })}
      </ol>
      <form onSubmit={formSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
