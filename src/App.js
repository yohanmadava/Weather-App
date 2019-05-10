import React, { Component } from 'react';
import CurrentTempratureControl from './components/currenttempraturecontrol/CurrentTempratureControl';
import WeekTempratureControl from './components/currenttempraturecontrol/WeekTempratureControl';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {

      currentWeather: {
        currentLocation: {},
        currentDate: new Date(),
        currentTemprature: '',
        currentWeatherLabel: '',
        currentWind: '',
        currentHumidity: '',
        currentPressure: ''
      },

      value: ''
  
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {     
    this.Weatherapi('Colombo')
  }

  Weatherapi(city){

    const City = city
    const Key = "1d9ac9557cbda1076264774ad5f45766"

      axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + City + ',LK&?&APPID=' + Key + '&units=metric').then(res => {

      const currentWeather = res.data;
      
      console.log(currentWeather)

      this.setState({

        currentTemprature: (currentWeather.main.temp).toFixed(0),
        currentWeatherLabel: currentWeather.weather[0].main,
        currentWind: (currentWeather.wind.speed).toFixed(0),
        currentHumidity: currentWeather.main.humidity,
        currentPressure: currentWeather.main.pressure,

      });

      
    })

      axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + City + ',LK&?&APPID=' + Key + '&units=metric').then(res=>{

      const day2Weather=res.data;
      const day3Weather=res.data;
      const day4Weather=res.data;
      const day5Weather=res.data;

      console.log(day2Weather,day3Weather,day4Weather,day5Weather)
 
      this.setState({

        d2currentTemprature:(day2Weather.list[10].main.temp).toFixed(0),
        d2currentWeatherLabel:day2Weather.list[10].weather[0].main,

        d3currentTemprature:(day3Weather.list[18].main.temp).toFixed(0),
        d3currentWeatherLabel:day3Weather.list[18].weather[0].main,
        

        d4currentTemprature:(day4Weather.list[26].main.temp).toFixed(0),
        d4currentWeatherLabel:day4Weather.list[26].weather[0].main,

        d5currentTemprature:(day5Weather.list[34].main.temp).toFixed(0),
        d5currentWeatherLabel:day5Weather.list[34].weather[0].main,

      })
    })

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.Weatherapi(this.state.value);
    event.preventDefault();
  }

  render() {

    function getTimePeriod(currentDate) {
      if (currentDate.getHours() < 12) {
        return 'morning';
      }
      if (currentDate.getHours() < 18) {
        return 'afternoon';
      }
      if (currentDate.getHours() < 6 || currentDate.getHours() <= 24) {
        return 'night';
      }
    }

    let { currentLocation, currentDate } = this.state.currentWeather;

    return (
      <React.Fragment>

        <div className={document.body.style.backgroundImage = getTimePeriod(currentDate)}>

          <div className="location-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <i className="fas fa-search search"></i>

                  <form className="form" onSubmit={this.handleSubmit}>
                    <input className="location" value={this.state.value} onChange={this.handleChange} type="text" name="city" id="address-input" autoComplete="off" placeholder="Search Location ..." list="list" />
                    <datalist id="list">
                      <option>Galle</option>
                      <option>Jaffna</option>
                      <option>Kandy</option>
                      <option>Nuwara Eliya</option>
                      <option>Ambalangoda</option>
                      <option>Polonnaruwa</option>
                      <option>Ampara</option>
                      <option>Kurunegala</option>
                      <option>Anuradhapura</option>
                      <option>Ragama</option>
                    </datalist>
                  </form>

                </div>
              </div>
            </div>
          </div>

          <CurrentTempratureControl location={currentLocation} date={currentDate} temprature={this.state.currentTemprature} label={this.state.currentWeatherLabel} wind={this.state.currentWind} humidity={this.state.currentHumidity} pressure={this.state.currentPressure} />

          <WeekTempratureControl temprature={this.state.currentTemprature} label={this.state.currentWeatherLabel} date={currentDate} temprature2={this.state.d2currentTemprature} label2={this.state.d2currentWeatherLabel} temprature3={this.state.d3currentTemprature} label3={this.state.d3currentWeatherLabel} temprature4={this.state.d4currentTemprature} label4={this.state.d4currentWeatherLabel} temprature5={this.state.d5currentTemprature} label5={this.state.d5currentWeatherLabel} />

        </div>

      </React.Fragment>
    );
  }

}

export default App;
