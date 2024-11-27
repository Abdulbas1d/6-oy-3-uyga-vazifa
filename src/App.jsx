import { useState } from 'react'
import './App.css'
import data from './assets/data.json'
import logoPicture from './assets/images/logo-picture.svg'
import heartWhitePicture from './assets/images/heart-white.svg'
import heartRedPicture from './assets/images/heart-red.svg'



function App() {
  const [likedMovie, setMovie] = useState({})
  const [count, setCount] = useState(0)

  const handleClick = (movieId) => {
    setMovie((prev) => {
      const isLiked = !prev[movieId]
      setCount((prevCount) => prevCount + (isLiked ? 1 : -1));

      return {
        ...prev,
        [movieId]: isLiked,
      }
    })
  }


  return (
    <div>
      <header className="header header_container" count={count}>
        <img src={logoPicture} alt="" />
        <h2>Kinolar Ro'yxati</h2>
        <div className="datas">
          <a href="#">Bosh sahifa</a>
          <a href="#">Kinolar</a>
          <a href="#">Yangiliklar</a>
        </div>
        <div className="likes">
          <img src={heartWhitePicture} alt="There is Heart picture" />
          <p>{count > 0 ? count : 0}</p>likes
        </div>
      </header>

      <h1>Movie Genre</h1>

      <div className="movieContainer">
        {data.map((movie, index) => (
          <div className="movieCard" key={index}>
            <img src={movie.Images[0]} alt="" />
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <button onClick={() => handleClick(movie.id)} className='btnLike'>
              {likedMovie[movie.id] ? (
                <img src={heartRedPicture} alt="" />
              ) : (
                <img src={heartWhitePicture} alt="" />
              )}
            </button>

            <ul className="informations">
              <li>
                <strong>Yil:</strong>
                {movie.Year}
              </li>
              <li>
                <strong>Reyting:</strong>
                {movie.Rated}
              </li>
              <li>
                <strong>Chiqarilgan sana:</strong>
                {movie.Released}
              </li>
              <li>
                <strong>Davomiyligi:</strong>
                {movie.Runtime}
              </li>
              <li>
                <strong>Janr:</strong>
                {movie.Genre}
              </li>
              <li>
                <strong>Rejissor:</strong>
                {movie.Director}
              </li>
              <li>
                <strong>Yozuvchi:</strong>
                {movie.Writer}
              </li>
              <li>
                <strong>Aktyorlar:</strong>
                {movie.Actors}
              </li>
              <li>
                <strong>Til:</strong>
                {movie.Language}
              </li>
              <li>
                <strong>Mamlakat:</strong>
                {movie.Country}
              </li>
              <li>
                <strong>Mukofotlar:</strong>
                {movie.Awards}
              </li>
              <li>
                <strong>IMDB reytingi:</strong>
                {movie.imdbRating}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App