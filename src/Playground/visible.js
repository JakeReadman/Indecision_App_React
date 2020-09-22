class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVis = this.toggleVis.bind(this);
    this.state = {
      visibility: false,
    };
  }
  toggleVis() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVis}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        <p>{this.state.visibility && 'Here is some text to hide'}</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');
// let visibility;

// const toggleVis = () => {
//   visibility = !visibility;
//   renderTemplate();
// };

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVis}>
//         {visibility ? 'Hide Details' : 'Show Details'}
//       </button>
//       <p>{visibility && 'Here is some text to hide'}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderTemplate();
