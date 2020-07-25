import React from "react"
import PropTypes from "prop-types"

const RoomSize = ({ room_sizes, brand, title }) => {
  return (
    <section>
      <div className="product-grid">
        <h3 className="h5 fw-600"> {brand}</h3>
        <p>{title}</p>
        <p className="bg-primary text-white pl-2">
          {room_sizes.map(item => {
            return <span>Suit {item.size} size room</span>
          })}
        </p>
        <hr />
      </div>
    </section>
  )
}

RoomSize.propTypes = {}

export default RoomSize
