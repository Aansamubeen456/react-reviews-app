import { useState } from 'react'
import people from './data'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const App = () => {
  let [index, setIndex] = useState(0)
  const { id, name, image, job, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }

  const showRandomPerson = () => {
    let random = Math.floor(Math.random() * people.length)
    if (random === index) {
      random = index + 1
    }
    setIndex(checkNumber(random))
  }

  return (
    <main>
      <article className="review" key={id}>
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" type="button" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" type="button" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn" type="button" onClick={showRandomPerson}>
          surprise me
        </button>
      </article>
    </main>
  )
}
export default App
