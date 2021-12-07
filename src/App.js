import React from 'react'
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false
  }

  handleChange = (e) => {
    const name = e.target.name
    const type = e.target.type
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value
      this.setState({
        [name]: value,
      })
    } else if (type === 'checkbox') {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      })
    }
  }
  handleSumbit = (e) => {
    e.preventDefault()
    console.log('działa')
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSumbit} noValidate>
          <label htmlFor="user">Twoje imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label htmlFor="email">Twoje email:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">Hasło:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
          </label>
          <label htmlFor="accept">
            <input type="checkbox" id='accept' name="accept" checked={this.state.accept} onChange={this.handleChange} />
          </label>
          <button>Zapisz się</button>
        </form></>
    );
  }
}
export default App;
