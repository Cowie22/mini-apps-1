const postAjax = (user, callback) => {
  $.ajax('http://localhost:6969/users', {
    type: 'POST',
    data: JSON.stringify(user),
    contentType: 'application/json',
    success: (data) => callback(null, data),
    error: (err) => callback(err),
  });
}

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
      phone: '',
      Card: '',
      ExpDate: '',
      Cvv: '',
      BillZip: ''
    };
    this.handleCheckoutClick = this.handleCheckoutClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCheckoutClick(event) {
    event.preventDefault();
    this.setState({checkout: this.state.checkout + 1});
  }
  handleInputChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  addUser(userInfo) {
    console.log(userInfo)
    postAjax(userInfo, (err, success) => {
      if (err) {
        console.log(err);
        return;
      }
      this.setState({checkout: 0})
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.addUser(this.state);
  }
  render() {
    const { checkout, name, mail, password, line1, line2, city,
    state, zipcode, phone, Card, ExpDate, Cvv, BillZip } = this.state;
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
        <Confirmation onChange={this.handleInputChange}
        name={name} mail={mail} password={password} line1={line1} line2={line2}
        city={city} state={state} zipcode={zipcode} phone={phone} Card={Card}
        ExpDate={ExpDate} Cvv={Cvv} BillZip={BillZip} onSubmit={this.handleSubmit} />
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
  <form onSubmit={props.onClick}>
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

var Form2 = (props) => (
  <form onSubmit={props.onClick}>
    <h3>Ship ing Info</h3>
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
      <input type="text" name="phone" placeholder="Insert Phone#" onChange={props.onChange} />
    </label>
    <input type="submit" value="To BillZip" />
  </form>
)

var Form3 = (props) => (
  <form onSubmit={props.onClick}>
    <h3>BillZip Info</h3>
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
      BillZip Zip Code:
      <input type="text" name="BillZip" placeholder="Insert BillZip Zip Code" onChange={props.onChange} />
    </label>
    <input type="submit" value="To Confirmation" />
  </form>
)

var Confirmation = (props) => (
  <form onSubmit={props.onSubmit} >
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
    <div>{props.phone}</div>
    Card:
    <div>{props.Card}</div>
    Expiration Date:
    <div>{props.ExpDate}</div>
    Cvv:
    <div>{props.Cvv}</div>
    BillZip:
    <div>{props.BillZip}</div>
    <input type="submit" value="PURCHASE" />
  </form>
)

ReactDOM.render(<App />, document.getElementById('app'));

