
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      name: '',
      mail: '',
      password: ''
    };
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleCheckoutClick() {
    this.setState({checkout: !this.state.checkout});
  }
  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }
  render() {
    const checked = this.state.checkout;
    return (
      <div>
        Shopping Cart
        {!checked ? (
          <input type="submit" value="CHECKOUT" onClick={this.handleCheckoutClick}/>
        ):
        <div>
        Create Account Please
        <form>
          <label>
            <input type="text" name="name" placeholder="Insert Name"
            value={this.state.name} onChange={this.handleInputChange}/>
          </label>
          <label>
            <input type="text" name="mail" placeholder="Insert Email"
            value={this.state.mail} onChange={this.handleInputChange}/>
          </label>
          <label>
            <input type="text" name="password" placeholder="Insert Password"
            value={this.state.password} onChange={this.handleInputChange}/>
          </label>
          <input type="submit" value="NEXT" />
        </form>
      </div>
      }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
//export default App

// var Form1 = function() {
//      return( 
//      <div>
//         Create Account Please
//         <form>
//           <label>
//             <input type="text" placeholder="Insert Name" value={this.state.name} />
//           </label>
//           <label>
//             <input type="text" placeholder="Insert Email" value={this.state.mail} />
//           </label>
//           <label>
//             <input type="text" placeholder="Insert Password" value={this.state.password} />
//           </label>
//           <input type="submit" value="NEXT" />
//         </form>
//       </div>
//      )
// }
