import React from "react"

// import OrderForm from "./OrderForm"
// import ProductTemplate from "../templates/product-template"

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state

    const queryString = window.location.href
      .replace(/(^\w+:|^)\/\//, "")
      .split("localhost:8000/products/")
      .join("")
    console.log(queryString)

    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary">
              <h5 class="modal-title text-white cap " id="exampleModalLabel">
                Book your Installation
              </h5>{" "}
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <br />
              <p className="font-italic">
                We'll contact you, to confirm the date and time.
              </p>
              <form
                className="grid-300 job-order-form"
                onSubmit={this.submitForm}
                action="https://formspree.io/mleppppp"
                method="POST"
              >
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Morning (between 8-11am)
                  </label>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    Afternoon (between 12-4pm)
                  </label>
                </div>
                <input
                  style={{ fontSize: 13 }}
                  type="text"
                  name="title"
                  value={queryString}
                />
                <input type="text" name="first_name" placeholder="Name:" />
                <input type="text" name="phone" placeholder="Phone:" />
                <input type="text" name="suburb" placeholder="Suburb:" />
                <input type="email" name="email" placeholder="Email:" />

                <textarea
                  rows="4"
                  cols="20"
                  name="message"
                  placeholder="Message:"
                />

                {status === "SUCCESS" ? (
                  <p class="bg-info text-white p-1 rounded">
                    Thanks for submitting your order, we'll get back to you
                    shortly.
                  </p>
                ) : (
                  <button className="btn-- btn-orange--">Submit</button>
                )}
                {status === "ERROR" && (
                  <p class="bg-danger text-white p-1 rounded">
                    Ooops! There was an error.
                  </p>
                )}
              </form>
            </div>
            <div class="modal-footer bg-light"></div>
          </div>
        </div>
      </div>
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
