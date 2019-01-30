
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mail: '',
      password: ''
    };
  }
  render() {
    return (
      <div>
        <form>
          <label>
            <input type="text" value={this.state.name} />
          </label>
          <label>
            <input type="text" value={this.state.name} />
          </label>
          <label>
            <input type="text" value={this.state.name} />
          </label>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
//export default App