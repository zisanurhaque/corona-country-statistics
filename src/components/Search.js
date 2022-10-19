import React from 'react'

const Search = ({handleInput, input, suggest, setInput, handleSuggest}) => {
  return (
    <>
        <div className="rows">

            <form onSubmit={(e) => handleInput(e, "button")}>

                <input type="search" placeholder="Type full country name" value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => handleSuggest(e)}/>
                <button>Search</button>

            </form>

            <div className="suggestions">
                {
                    input === '' ? null : 
                    suggest.map((item, index) => (
                    <button onClick={(e) => handleInput(e, item.Country)} key={index}>{item.Country}</button>
                    ))
                }
            </div>

      </div>
    </>
  )
}

export default Search
