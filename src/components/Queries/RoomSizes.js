import React from "react"

import RoomSize from "./RoomSize"

const RoomSizes = ({ roomSizes }) => {
  return (
    <section>
      <h2>Room Size</h2>
      <div className="product-grid">
        {roomSizes.map(roomSize => {
          return <RoomSize key={roomSize.id} {...roomSize} />
        })}
      </div>
    </section>
  )
}

export default RoomSizes
