import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capital extends Component {
  state = {
    activeCountryId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountry = () => {
    const {activeCountryId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      each => each.id === activeCountryId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getCountry(activeCountryId)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="question-container">
            <select
              className="selector"
              onChange={this.onChangeCapital}
              value={activeCountryId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="option"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capital
