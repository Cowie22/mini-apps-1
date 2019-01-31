
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
    this.handleAccountSubmit = this.handleAccountSubmit.bind(this);
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
        {!checked ? (
        <HomePage onClick={this.handleCheckoutClick} />
        ):
        checked ? (
        <Form1 onChange={this.handleInputChange} onClick={this.handleAccountSubmit} />
        ):
        account ? (
        <Form2 />
        ):
        account ? (
        <Form3 />
        ):
        <Confirmation />
        }
      </div>
    )
  }
}

var HomePage = (props) => (
  <div>
    <h3>Home Page</h3>
    <input type="submit" value="CHECKOUT" onClick={props.onClick} />
  </div>
)

var Form1 = (props) => (
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
    <input type="submit" value="To Shipping" onClick={props.onClick} />
  </form>
)

var Form2 = (props) => (
  <form>
    <h3>Shipping Info</h3>
    <label>
      Address:
      <input type="text" name="line1" placeholder="Line 1" />
      <input type="text" name="line2" placeholder="Line 2" />
    </label>
    <label>
      City:
      <input type="text" name="city" placeholder="Insert City" />
    </label>
    <label>
      State:
      <input type="text" name="state" placeholder="Insert State" />
    </label>
    <label>
      Zipcode:
      <input type="text" name="zipcode" placeholder="Insert Zipcode" />
    </label>
    <label>
      Phone#:
      <input type="text" name="Phone#" placeholder="Insert Phone#" />
    </label>
    <input type="submit" value="To Billing" />
  </form>
)

var Form3 = (props) => (
  <form>
    <h3>Billing Info</h3>
    <label>
      Credit Card:
      <input type="text" name="Card" placeholder="Insert Card" />
    </label>
    <label>
      Exp Date:
      <input type="text" name="Exp Date" placeholder="Insert Exp Date" />
    </label>
    <label>
      Cvv:
      <input type="text" name="Cvv" placeholder="Insert Cvv" />
    </label>
    <label>
      Billing Zip Code:
      <input type="text" name="Billing" placeholder="Insert Billing Zip Code" />
    </label>
    <input type="submit" value="To Confirmation" />
  </form>
)

var Confirmation = (props) => (
  <div>
    <h3>Confirmation</h3>
    <input type="submit" value="PURCHASE" />
  </div>
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
