import React, { Component } from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import './style.css'

class Rsvp extends Component {
  state = {
    name: '',
    email: '',
    rsvp: '',
    events: '',
    notes: '',
    sent: false,
    error: {},
  }

  changeHandler = (e) => {
    const error = this.state.error
    error[e.target.name] = ''

    this.setState({
      [e.target.name]: e.target.value,
      error,
    })
  }

  submitHandler = (e, intl) => {
    e.preventDefault()

    const { name, email, rsvp, events, notes, error } = this.state

    if (name === '') {
      error.name = intl.formatMessage({ id: 'rsvp_name_validation' })
    }
    if (email === '') {
      error.email = intl.formatMessage({ id: 'rsvp_email_validation' })
    }
    if (rsvp === '') {
      error.rsvp = intl.formatMessage({ id: 'rsvp_number_validation' })
    }
    if (events === '') {
      error.events = intl.formatMessage({ id: 'rsvp_attending_validation' })
    }
    // if (notes === '') {
    //   error.notes = intl.formatMessage({ id: 'rsvp_message_validation' })
    // }

    if (error) {
      this.setState({
        error,
      })
    }
    if (
      error.name === '' &&
      error.email === '' &&
      error.email === '' &&
      error.rsvp === '' &&
      error.events === ''
      // && error.notes === ''
    ) {
      let myForm = document.getElementById('rsvp-form')
      let formData = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          this.setState({
            sent: true,
          })
        })
        .catch((error) => alert(error))

      this.setState({
        name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {},
      })
    }
    console.log(this.state)
    console.log(this.state.error.notes)
  }

  render() {
    const { name, email, rsvp, events, notes, error } = this.state
    const { intl } = this.props
    return (
      <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
              {this.state.sent && (
                <div className="rsvp-wrap">
                  <div className="col-12">
                    <div className="section-title section-title4 text-center">
                      <p>{intl.formatMessage({ id: 'rsvp_confirmation' })}</p>
                    </div>
                  </div>
                </div>
              )}
              {!this.state.sent && (
                <div className="rsvp-wrap">
                  <div className="col-12">
                    <div className="section-title section-title4 text-center">
                      <h2>{intl.formatMessage({ id: 'be_our_guest' })}</h2>
                      <p>
                        {intl.formatMessage({ id: 'please_reserve_before' })}
                      </p>
                    </div>
                  </div>
                  <form
                    id="rsvp-form"
                    onSubmit={(e) => this.submitHandler(e, intl)}
                    data-netlify="true"
                  >
                    <div className="contact-form form-style">
                      <div className="row">
                        <input
                          type="hidden"
                          name="form-name"
                          value="rsvp-form"
                        />

                        <div className="col-12 col-sm-6">
                          <input
                            type="text"
                            value={name}
                            onChange={this.changeHandler}
                            placeholder={intl.formatMessage({
                              id: 'rsvp_name',
                            })}
                            id="fname"
                            name="name"
                          />
                          <p>{error.name ? error.name : ''}</p>
                        </div>
                        <div className="col-12  col-sm-6">
                          <input
                            type="text"
                            placeholder={intl.formatMessage({
                              id: 'rsvp_email',
                            })}
                            onChange={this.changeHandler}
                            value={email}
                            id="email"
                            name="email"
                          />
                          <p>{error.email ? error.email : ''}</p>
                        </div>
                        <div className="col col-sm-6 col-12">
                          <select
                            className="form-control"
                            onChange={this.changeHandler}
                            value={rsvp}
                            name="rsvp"
                          >
                            <option disabled value="">
                              {intl.formatMessage({ id: 'rsvp_number' })}
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                          <p>{error.rsvp ? error.rsvp : ''}</p>
                        </div>
                        <div className="col col-sm-6 col-12">
                          <select
                            className="form-control"
                            onChange={this.changeHandler}
                            value={events}
                            name="events"
                          >
                            <option disabled value="">
                              {intl.formatMessage({ id: 'rsvp_attending' })}
                            </option>
                            <option value="1">
                              {intl.formatMessage({
                                id: 'rsvp_attending_option_1',
                              })}
                            </option>
                            <option value="2">
                              {intl.formatMessage({
                                id: 'rsvp_attending_option_2',
                              })}
                            </option>
                          </select>
                          <p>{error.events ? error.events : ''}</p>
                        </div>
                        <div className="col-12 col-sm-12">
                          {intl.formatMessage({ id: 'rsvp_info' })}
                          <textarea
                            className="contact-textarea"
                            value={notes}
                            onChange={this.changeHandler}
                            placeholder={intl.formatMessage({
                              id: 'rsvp_message',
                            })}
                            name="notes"
                          ></textarea>
                          <p>{error.notes ? error.notes : ''}</p>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                        <button id="submit" type="submit" className="submit">
                          {intl.formatMessage({ id: 'rsvp_send' })}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default injectIntl(Rsvp)
