import React from 'react';
import { getWeatherIcon } from '../../help/Help.js';

function getDay(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

function getFormattedDate(date) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    let day = date.getDate();
    return months[date.getMonth()] + ' ' + day;
}

function timeCheck(date) {
    if (date.getHours() < 12 ) {
        return 'morning';
    }
    if (date.getHours() < 18) {
        return 'afternoon';
    }
    if (date.getHours() < 6 || date.getHours() <= 24) {
        return 'night';
    }
}

export default function CurrentTempratureControl(props) {       
    return (
        <React.Fragment>
 
            <div className="main-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <i id="main-icon" className={"wi wi-" + getWeatherIcon(props.date, props.label)}></i>
                        </div>
                        <div className="col-6 left-part">
                            <p className="main-day">{getDay(props.date)}</p>
                            <p className="month">{getFormattedDate(props.date)}</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="value">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="number">{props.temprature}°C</p>
                        </div>
                        <div className="col-12">
                            <p className="status">{props.label}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="fourth-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-3 wind-section">
                                <i className="wi wi-strong-wind wind-icon"></i>
                                <p className={"wind-heading1-" + timeCheck(props.date)}>Wind</p>
                                <p className={"wind-heading2-" + timeCheck(props.date)}>{props.wind}km/h</p>
                            </div>
                            <div className="col-3 humidity-section">
                                <i className="wi wi-humidity humidity-icon"></i>
                                <p className={"humidity-heading1-" + timeCheck(props.date)}>Humidity</p>
                                <p className={"humidity-heading2-" + timeCheck(props.date)}>{props.humidity}%</p>
                            </div>
                            <div className="col-3 pressure-section">
                                <i className="wi wi-barometer pressure-icon"></i>
                                <p className={"pressure-heading1-" + timeCheck(props.date)}>Pressure</p>
                                <p className={"pressure-heading2-" + timeCheck(props.date)}>{props.pressure}mb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}