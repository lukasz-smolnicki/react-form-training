import React from 'react'
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    email: '',
    pass: '',
    accept: false,
    message: '',
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

  formValitdation = () => {
    let username = false
    let email = false
    let password = false
    let accept = false
    let correct = false
    if (this.state.username.length > 10 && this.state.username.indexOf(' ') === -1) {
      username = true
    }
    if (this.state.email.indexOf('@') !== -1) {
      email = true
    }
    if (this.state.pass.length === 8) {
      password = true
    }
    if (this.state.accept === true) {
      accept = true
    }

    if (username && email && password && accept) {
      correct = true
    }
    return ({
      correct,
      username,
      email,
      password,
      accept
    })
  }

  handleSumbit = (e) => {
    e.preventDefault()

    const validation = this.formValitdation()
    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        pass: '',
        accept: false,
        message: 'Formularz wysłany',
        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false,
        }
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          pass: !validation.password,
          accept: !validation.accept
        }
      })
    }
  }

  componentDidUpdate() {
    if (this.state.message !== '') {
      setTimeout(() => this.setState({
        message: ''
      }), 3000)
    }
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
        {this.state.message && <h3>{this.state.message}</h3>}
      </div>
    );
  }
}

export default App;
