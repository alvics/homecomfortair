import React from "react"
import StaticImage from "../components/StaticQueryImages"

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

    return (
      <div
        className="modal fade"
        id="quoteModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header heading-box-color">
              <h5
                className="modal-title text-white cap fw-600"
                id="exampleModalLabel"
              >
                <span>
                  {" "}
                  <StaticImage
                    filename="HCA-avatar-WHITE-1400.png"
                    alt="home comfort air logo"
                  />
                </span>{" "}
                Air Conditioning Quote
              </h5>{" "}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <br />
              <p className="font-italic">
                Receive your free installation quote.
              </p>
              <form
                className="grid-300 job-order-form"
                onSubmit={this.submitForm}
                action="https://formspree.io/mleppppp"
                method="POST"
              >
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Name:"
                />
                <input type="text" name="phone" required placeholder="Phone:" />
                <input
                  type="text"
                  name="suburb"
                  required
                  placeholder="Suburb:"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email:"
                />

                <div className="input-group mb-3">
                  <select
                    required="required"
                    className="form-select form-control"
                    id="inputGroupSelect02 terms"
                  >
                    <option selected>Select dwelling type</option>
                    <option value="1">House - single story</option>
                    <option value="2">House - double story</option>
                    <option value="3">Apartment - high rise</option>
                    <option value="3">Unit - duplex</option>
                  </select>
                </div>

                <div className="border p-2 rounded">
                  <h5 className="h6 fw-600"> Your Home </h5>
                  <div className="form-check mt-2 pl-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label text-dark"
                      for="flexRadioDefault1"
                    >
                      Existing dwelling
                    </label>
                  </div>

                  <div className="form-check mb-4 pl-5">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label text-dark"
                      for="flexRadioDefault1"
                    >
                      New construction
                    </label>
                  </div>
                </div>

                <div className="list-group text-dark border p-2">
                  <div className="mb-2">
                    <h4 className="h5 fw-600 mb-2"> Air Conditioning</h4>
                  </div>

                  <h5 className="h6 fw-600"> Single Room</h5>
                  <label className="mb-3 pl-3">
                    <input
                      className="form-check-input mr-1"
                      type="checkbox"
                      value=""
                    />
                    Wall hung split system
                  </label>
                  <h5 className="h6 fw-600"> Multi Room</h5>
                  <label className="mb-3 pl-3">
                    <input
                      className="form-check-input mr-1"
                      type="checkbox"
                      value=""
                    />
                    Multi-head split system
                  </label>
                  <h5 className="h6 fw-600"> Entire Home</h5>
                  <label className="mb-3 pl-3">
                    <input
                      className="form-check-input mr-1"
                      type="checkbox"
                      value=""
                    />
                    Split ducted system
                  </label>
                </div>

                <textarea
                  rows="4"
                  cols="20"
                  name="message"
                  required
                  placeholder="Message:"
                />

                {status === "SUCCESS" ? (
                  <p className="bg-info text-white p-1 rounded">
                    Thanks for submitting, we'll get back to you shortly.
                  </p>
                ) : (
                  <button className="btn-- btn-orange--">Submit</button>
                )}
                {status === "ERROR" && (
                  <p className="bg-danger text-white p-1 rounded">
                    Ooops! There was an error.
                  </p>
                )}
              </form>
            </div>
            <div className="py-2 bg-light">
              <StaticImage
                filename="Home-Comfort-Air-logo-650.png"
                alt="home comfort air logo"
              />
            </div>
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
