import React from "react"

const PageURL = () => {
  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <input
      style={{ fontSize: 13 }}
      type="text"
      readOnly="readonly"
      value={url}
    />
  )
}

export default PageURL
