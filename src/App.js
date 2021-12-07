import React from 'react'
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,
    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false,
    }
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

  messages = {
    username_incorrect: 'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji',
    email_incorrect: 'Brak @ w emailu',
    password_incorrect: 'Hasło musi mieć 8 znaków',
    accept_incorrect: 'Nie potwierdzona zgoda'
  }

  handleSumbit = (e) => {
    e.preventDefault()
    console.log('działa')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSumbit} noValidate>
          <label htmlFor="user">Twoje imię:
            <input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
          </label>
          <label htmlFor="email">Twoje email:
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
          </label>
          <label htmlFor="password">Hasło:
            <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
            {this.state.errors.pass && <span>{this.messages.password_incorrect}</span>}
          </label>
          <label htmlFor="accept">Potwierdź zgodę:
            <input type="checkbox" id='accept' name="accept" checked={this.state.accept} onChange={this.handleChange} />
            {this.state.errors.accept && <span>{this.messages.accept_incorrect}</span>}
          </label>
          <button>Zapisz się</button>
        </form>
      </div>
    );
  }
}

export default App;
