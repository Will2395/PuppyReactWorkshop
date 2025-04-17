import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log(puppyList)

  function handleClick() {

  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)

  return (
    <div className="App" id="pup-box">
      <div id="pup-list">
        <h2>Choose a Puppy:</h2>

        {puppies.map((puppy) => {

          return (
            <div>
              <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
                {puppy.name}
              </p>
            </div>
          );
        })}
      </div>
      <div id="pup-feature">
        {featPupId && (
          <div id="feature-box">
            <div id="divider"></div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default App
