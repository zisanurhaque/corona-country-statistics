import axios from "axios";
import { useEffect, useState } from "react";
import Footer from './components/Footer'
import Search from "./components/Search";
import Servey from "./components/Servey";

const App = () => {

  const [countries, setCountries] = useState([]) // All countries array

  const [global, setGlobal] = useState({}) // global sarvey

  const [country, setCountry] = useState({}) // Survey values for specific country

  const [input, setInput] = useState('') // user search value

  const [suggest, setSuggest] = useState([]) // suggested countries name based on user search value


  /*

    This function will find the country name from "countries" array 
    that the user search for and put servey values in the "Country" object 

  */

  const handleInput = (e, country) => {

    e.preventDefault()

    const value = input.toLowerCase()

    const update = countries.find((item) => {
      return item.Country.toLowerCase() === value || item.Country.toLowerCase() === country.toLowerCase()
    })

    if(update){
      setCountry(update)
      setInput('')
    }
    
    else{
      setCountry({})
      setInput("")
    }

  }

  /*

    his function will get all the countries that will match 
    with user's search value and put data to the "suggest" array

  */

  const handleSuggest = (e) => {
    e.preventDefault();

    if(input === ''){
      setSuggest([])
    }else{
      let update = []
      update = countries.filter((item) => {
        return item.Country.toLowerCase().search(input.toLowerCase()) !== -1
      })
      setSuggest(update)
    }
  }

  // data fetching from online built-in api

  useEffect(() => {

    axios.get("https://api.covid19api.com/summary").then(response => setGlobal(response.data.Global))
    axios.get("https://api.covid19api.com/summary").then(response => setCountries(response.data.Countries))

  }, [])

  // This function will convert normal number comma seperated value

  const commaSeperatedNumber = (value) => {
    const output = parseInt(value).toLocaleString('en-US')
    return output
  }

  return (
    <div className="main">

      <Search handleInput={handleInput} input={input} suggest={suggest} setInput={setInput} handleSuggest={handleSuggest}/>

      <Servey country={country} commaSeperatedNumber={commaSeperatedNumber} global={global}/>

      <Footer/>

    </div>
  );
}

export default App;
