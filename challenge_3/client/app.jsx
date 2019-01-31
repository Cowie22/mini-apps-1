
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false,
      name: '',
      mail: '',
      password: '',
      accountStatus: false
    };
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleCheckoutClick() {
    this.setState({checkout: !this.state.checkout});
  }
  handleAccountSubmit() {
    this.setState({accountStatus: !this.state.accountStatus})
  }
  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }
  render() {
    const checked = this.state.checkout;
    const account = this.state.accountStatus;
    return (
      <div>
        Shopping Cart
        {!checked ? (
          <input type="submit" value="CHECKOUT" onClick={this.handleCheckoutClick}/>
        ):
        <Form1 onChange={this.handleInputChange} />
      }
      </div>
    )
  }
}

let Info;
var Form1 = (props) => (
  info =
  <form>
    <h3>Create Account Please</h3>
    <label>
      Name:
      <input type="text" name="name" placeholder="Insert Name" onChange={props.onChange} />
    </label>
    <label>
      Email:
      <input type="text" name="mail" placeholder="Insert Email" onChange={props.onChange} />
    </label>
    <label>
      Password:
      <input type="text" name="password" placeholder="Insert Password" onChange={props.onChange} />
    </label>
    <input type="submit" value="To Shipping" />
  </form>
)

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
