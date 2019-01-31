
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: 0,
      name: '',
      mail: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: '',
      PhoneNum: '',
      Card: '',
      ExpDate: '',
      Cvv: '',
      Billing: ''
    };
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleCheckoutClick() {
    this.setState({checkout: this.state.checkout + 1});
  }
  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }
  handleReset() {
    this.setState({checkout: this.state.checkout = 0})
  }
  render() {
    const { checkout, name, mail, password, line1, line2, city,
    state, zipcode, PhoneNum, Card, ExpDate, Cvv, Billing } = this.state;
    return (
      <div>
        {checkout === 0 ? (
        <HomePage onClick={this.handleCheckoutClick} />
        ):
        checkout === 1 ? (
        <Form1 onChange={this.handleInputChange} onClick={this.handleCheckoutClick} />
        ):
        checkout === 2 ? (
        <Form2 onChange={this.handleInputChange} onClick={this.handleCheckoutClick} />
        ):
        checkout === 3 ? (
        <Form3 onChange={this.handleInputChange} onClick={this.handleCheckoutClick} />
        ):
        checkout === 4 ? (
        <Confirmation onChange={this.handleInputChange} onClick={this.handleReset}
        name={name} mail={mail} password={password} line1={line1} line2={line2}
        city={city} state={state} zipcode={zipcode} PhoneNum={PhoneNum} Card={Card}
        ExpDate={ExpDate} Cvv={Cvv} Billing={Billing} />
        ):
        <HomePage onClick={this.handleCheckoutClick} />
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
      <input type="text" name="line1" placeholder="Line 1" onChange={props.onChange} />
      <input type="text" name="line2" placeholder="Line 2" onChange={props.onChange} />
    </label>
    <label>
      City:
      <input type="text" name="city" placeholder="Insert City" onChange={props.onChange} />
    </label>
    <label>
      State:
      <input type="text" name="state" placeholder="Insert State" onChange={props.onChange} />
    </label>
    <label>
      Zipcode:
      <input type="text" name="zipcode" placeholder="Insert Zipcode" onChange={props.onChange} />
    </label>
    <label>
      Phone#:
      <input type="text" name="PhoneNum" placeholder="Insert Phone#" onChange={props.onChange} />
    </label>
    <input type="submit" value="To Billing" onClick={props.onClick} />
  </form>
)

var Form3 = (props) => (
  <form>
    <h3>Billing Info</h3>
    <label>
      Credit Card:
      <input type="text" name="Card" placeholder="Insert Card" onChange={props.onChange} />
    </label>
    <label>
      Exp Date:
      <input type="text" name="ExpDate" placeholder="Insert Exp Date" onChange={props.onChange} />
    </label>
    <label>
      Cvv:
      <input type="text" name="Cvv" placeholder="Insert Cvv" onChange={props.onChange} />
    </label>
    <label>
      Billing Zip Code:
      <input type="text" name="Billing" placeholder="Insert Billing Zip Code" onChange={props.onChange} />
    </label>
    <input type="submit" value="To Confirmation" onClick={props.onClick} />
  </form>
)

var Confirmation = (props) => (
  <div>
    <h3>Confirmation</h3>
    Name:
    <div>{props.name}</div>
    Mail:
    <div>{props.mail}</div>
    Password:
    <div>{props.password}</div>
    Address:
    Line1:
    <div>{props.line1}</div>
    Line2:
    <div>{props.line2}</div>
    City:
    <div>{props.city}</div>
    State:
    <div>{props.state}</div>
    Zipcode:
    <div>{props.zipcode}</div>
    Phone Number:
    <div>{props.PhoneNum}</div>
    Card:
    <div>{props.Card}</div>
    Expiration Date:
    <div>{props.ExpDate}</div>
    Cvv:
    <div>{props.Cvv}</div>
    Billing:
    <div>{props.Billing}</div>
    <input type="submit" value="PURCHASE" onClick={props.onClick} />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));

