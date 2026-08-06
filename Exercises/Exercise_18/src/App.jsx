import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Ab apno ne ye jo data fetch kiya hai, use cards me store krna hai, to apne map function ka use krenge */}

        {cards.map((card) => {
          return <div key={card.id} className="cards">
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: {card.userId}</span>
          </div>
        })}

      </div>
    </>
  )
}

export default App
