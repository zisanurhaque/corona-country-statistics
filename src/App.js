import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [countries, setCountries] = useState([])
  const [global, setGlobal] = useState({})
  const [country, setCountry] = useState({})
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    e.preventDefault()
    const value = input.toLowerCase()
    const update = countries.find((item) => {
      return item.Country.toLowerCase() === value
    })
    if(update){
      setCountry(update)
    }else{
      setCountry({})
    }
  }

  useEffect(() => {

    axios.get("https://api.covid19api.com/summary").then(response => setGlobal(response.data.Global))
    axios.get("https://api.covid19api.com/summary").then(response => setCountries(response.data.Countries))

  }, [])

  return (
    <div className="main">

      <div className="rows">
        <form onSubmit={handleInput}>
          <input type="search" placeholder="Type full country name" onChange={(e) => setInput(e.target.value)}/>
          <button>Search</button>
        </form>
      </div>

      <div className="country">
        <h3>{Object.keys(country).length === 0 ? "Global" : country.Country}</h3>
        <p>{Object.keys(country).length === 0 ? global?.Date : country.Date}</p>
      </div>

      <div className="rows">
        <div className="box">
          <h5>New Confirmed</h5>
          <h3>{Object.keys(country).length === 0 ? global?.NewConfirmed : country?.NewConfirmed}</h3>
        </div>
        <div className="box">
          <h5>Total Confirmed</h5>
          <h3>{Object.keys(country).length === 0 ? global?.TotalConfirmed : country?.TotalConfirmed}</h3>
        </div>
      </div>

      <div className="rows">
        <div className="box">
          <h5>New Death</h5>
          <h3>{Object.keys(country).length === 0 ? global?.NewDeaths : country?.NewDeaths}</h3>
        </div>
        <div className="box">
          <h5>Total Death</h5>
          <h3>{Object.keys(country).length === 0 ? global?.TotalDeaths : country?.TotalDeaths}</h3>
        </div>
      </div>

      <div className="rows">
        <div className="box">
          <h5>New Recovered</h5>
          <h3>{Object.keys(country).length === 0 ? global?.NewRecovered : country?.NewRecovered}</h3>
        </div>
        <div className="box">
          <h5>Total Recovered</h5>
          <h3>{Object.keys(country).length === 0 ? global?.TotalRecovered : country?.TotalRecovered}</h3>
        </div>
      </div>

      <div className="rows">
        <a rel="noreferrer noopener" target="_blank" href="https://api.covid19api.com/">api.covid19api.com</a><a rel="noreferrer noopener" target="_blank"href="https://zisanurhaque.netlify.app">Zisanur Haque</a>
      </div>

    </div>
  );
}

export default App;
