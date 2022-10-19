import React from 'react'

const Servey = ({country, global, commaSeperatedNumber}) => {
  return (
    <>
        <div className="country">

            <h3>
                {
                    Object.keys(country).length === 0 ? 
                    "Global" : 
                    country?.Country
                }
            </h3>

            <p>
                {
                    Object.keys(country).length === 0 ? 
                    global?.Date : country?.Date
                }
            </p>

        </div>

        <div className="rows">

            <div className="box">

                <h5>New Confirmed</h5>

                <h3>
                    {
                        Object.keys(country).length === 0 ? 
                        commaSeperatedNumber(global?.NewConfirmed) : 
                        commaSeperatedNumber(country?.NewConfirmed)
                    }
                </h3>

            </div>

            <div className="box">

                <h5>Total Confirmed</h5>

                <h3>
                    {
                        Object.keys(country).length === 0 ? 
                        commaSeperatedNumber(global?.TotalConfirmed) : 
                        commaSeperatedNumber(country?.TotalConfirmed)
                    }
                </h3>

            </div>

        </div>

        <div className="rows">

            <div className="box">

                <h5>New Death</h5>

                <h3>
                    {
                        Object.keys(country).length === 0 ? 
                        commaSeperatedNumber(global?.NewDeaths) : 
                        commaSeperatedNumber(country?.NewDeaths)
                    }
                </h3>

            </div>

            <div className="box">

                <h5>Total Death</h5>

                <h3>
                    {
                        Object.keys(country).length === 0 ? 
                        commaSeperatedNumber(global?.TotalDeaths) : 
                        commaSeperatedNumber(country?.TotalDeaths)
                    }
                </h3>

            </div>

        </div>

        <div className="rows">

            <div className="box">

                <h5>New Recovered</h5>

                <h3>
                    {
                        Object.keys(country).length === 0 ? 
                        commaSeperatedNumber(global?.NewRecovered) : 
                        commaSeperatedNumber(country?.NewRecovered)
                    }
                </h3>

            </div>

            <div className="box">

                <h5>Total Recovered</h5>

                <h3>
                    {
                        Object.keys(country).length === 0 ? 
                        commaSeperatedNumber(global?.TotalRecovered) : 
                        commaSeperatedNumber(country?.TotalRecovered)
                    }
                </h3>

            </div>

        </div>
    </>
  )
}

export default Servey
