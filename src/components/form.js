import React from "react"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        className="grid-300"
        onSubmit={this.submitForm}
        action="https://formspree.io/mleppppp"
        method="POST"
      >
        <input type="text" name="first_name" placeholder="Name:" />
        <input type="text" name="phone" placeholder="Phone:" />
        <input type="email" name="email" placeholder="Email:" />

        <textarea rows="4" cols="20" name="message" placeholder="Message:" />

        {status === "SUCCESS" ? (
          <p>Thanks for submitting a quote, we'll get back to you shortly.</p>
        ) : (
          <button className="btn btn-orange">Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}