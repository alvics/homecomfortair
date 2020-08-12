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

    const queryString = window.location.href
      .replace(/(^\w+:|^)\/\//, "")
      .split("localhost:8000/")
      .join("")
    console.log(queryString)

    return (
      <div
        className="modal fade"
        id="serviceModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header heading-box-color">
              <h5
                className="modal-title text-white text-center cap fw-600"
                id="exampleModalLabel"
              >
                <span>
                  {" "}
                  <StaticImage
                    filename="HCA-avatar-WHITE-1400.png"
                    alt="home comfort air image"
                  />
                </span>{" "}
                Air Conditioning Service/Maintenance
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
                We'll contact you, to confirm the date and time for your A/C
                service.
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
                  <label
                    className="form-check-label text-dark"
                    for="flexRadioDefault1"
                  >
                    Morning (between 8-11am)
                  </label>
                </div>

                <div className="form-check mb-4">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label text-dark"
                    for="flexRadioDefault1"
                  >
                    Afternoon (between 12-4pm)
                  </label>
                </div>
                <input
                  style={{ fontSize: 13 }}
                  type="text"
                  name="title"
                  value={queryString}
                />
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

                <textarea
                  rows="4"
                  cols="20"
                  name="message"
                  required
                  placeholder="Message:"
                />

                {status === "SUCCESS" ? (
                  <p className="bg-info text-white p-1 rounded">
                    Thanks for submitting your service request, we'll get back
                    to you shortly.
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
            <div className="modal-footer bg-light"></div>
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
