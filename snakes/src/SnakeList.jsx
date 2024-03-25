import { useState } from 'react'

const SnakeList = () => {
  const [snakes, setSnakes] = useState(["snake", "snake"])

  return (
    <>
      <button onClick={() => setSnakes([...snakes, "snake"])}>Add Snake</button>

      <ul>
        {
          snakes.map((singleSnake, index) => {
            return <li key={index}>{singleSnake}</li>
          })
        }
      </ul>
    </>
    
  )
}

export default SnakeList