import React from 'react'

const EventTile = (props) => {
  let displayClass
  if (props.eventType === "personal") {
    displayClass = "green-bg"
  } else if (props.eventType === "business-casual") {
    displayClass = "pink-bg"
  } else if (props.eventType === "business") {
    displayClass = "blue-bg "
  }

  return (
    <div className={displayClass}>
      <h1>{props.title}</h1>
      <p>{props.timePeriod}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default EventTile