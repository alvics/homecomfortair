import React from "react"
import StaticImage from "../components/StaticQueryImages"
import PageURL from "../components/PageUrl"

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

    /* const queryString = window.location.href
      .replace(/(^\w+:|^)\/\//, "")
      .split("localhost:8000/products/")
      .join("") */

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content enquiry-form">
            <div className="modal-footer heading-box-color mx-0"></div>
            <div className="modal-header">
              <div className="m-auto">
                {" "}
                <h5
                  className="h6 modal-title text-dark cap fw-600"
                  id="exampleModalLabel"
                >
                  <span>
                    {" "}
                    <StaticImage
                      filename="Home-Comfort-Air-COL-03-650.png"
                      alt="home comfort avatar logo"
                    />
                  </span>{" "}
                  Air Conditioning Installation
                  <br />
                  <small>*Enquiry form</small>
                </h5>
              </div>
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
              <p
                style={{ marginTop: `-25px`, paddingBottom: 15 }}
                className="font-italic border-bottom mb-4"
              >
                Complete this form and we'll return to you by email or phone.
              </p>

              <form
                className="grid-300 job-order-form"
                onSubmit={this.submitForm}
                action="https://formspree.io/mleppppp"
                method="POST"
              >
                <small>Preferred contact method:</small>
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <small>Email</small>
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
                    <small>Phone</small>
                  </label>
                </div>

                <PageURL />
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Name:"
                />
                <input type="text" name="phone" required placeholder="Phone:" />
                <input type="text" name="suburb" placeholder="Suburb:" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email:"
                />
                <textarea
                  rows="4"
                  cols="20"
                  name="message"
                  required
                  placeholder="Message:"
                />
                {status === "SUCCESS" ? (
                  <p className="bg-info text-white p-1 rounded">
                    Thanks for submitting your order, we'll get back to you
                    shortly.
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
            <div className="modal-footer heading-box-color"></div>
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
