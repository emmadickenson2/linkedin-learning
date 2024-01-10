import React, { Component } from "react";
import "styles/footer.css";
import logo from "assets/images/logo-wordmark-white.svg";

class Footer extends Component {
  constructor() {
    super()

    this.state = {
      subscribed: false
    }

    this.successMessage = React.createRef()
  }

  componentDidUpdate = () => {
    this.successMessage.current.focus()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      subscribed: true
    })
  }

  render() {
    return (
      <footer>
        <div className="footer__container">
          <img src={logo} alt="logo" className="footer__logo" />

          {this.state.subscribed ? <p ref={this.successMessage} tabIndex="0">Thank you! You've been subscribed to our news</p> :
            <form className="footer__form" onSubmit={this.handleSubmit}>
              <label>WANT RECIPES? GET OUR NEWSLETTER!</label>
              <input type="text" placeholder="Enter your email" />
              <input type="submit" value="SIGN UP" />
            </form>
          }

          <p>
            This is a fictitious company created by LinkedIn Corporation, or its
            affiliates, solely for the creation and development of educational
            training materials. Any resemblance to real products or services is
            purely coincidental. Information provided about the products or
            services is also fictitious and should not be construed as
            representative of actual products or services on the market in a
            similar product or service category.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;