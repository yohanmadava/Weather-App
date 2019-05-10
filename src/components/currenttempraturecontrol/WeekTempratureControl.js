import React from 'react';
import { getWeatherIcon } from '../../help/Help.js';

function getDay(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}

function getNext1Day(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var new_date = date.getDay() + 1;
    if (new_date > 6) {
        new_date = new_date - 7;
    }
    return days[new_date];
}

function getNext2Day(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var new_date = date.getDay() + 2;
    if (new_date > 6) {
        new_date = new_date - 7;
    }
    return days[new_date];
}

function getNext3Day(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var new_date = date.getDay() + 3;
    if (new_date > 6) {
        new_date = new_date - 7;
    }
    return days[new_date];
}

function getNext4Day(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var new_date = date.getDay() + 4;
    if (new_date > 6) {
        new_date = new_date - 7;
    }
    return days[new_date];
}

export default function WeekTempratureControl(props) {          
    return (
        <React.Fragment>

            <div className="container-fluid">
                <div className="fifth-section">
                    <div className="row daynews-row">
                        <div className="col mon">
                            <p className="day">{getDay(props.date)}</p>
                            <i id="day-icon" className={"wi wi-" + getWeatherIcon(props.date, props.label)}></i>    
                            <p className="temp">{props.temprature}°C</p>
                        </div>
                        <div className="col tue">
                            <p className="day">{getNext1Day(props.date)}</p>
                            <i id="day-icon" className={"wi wi-" + getWeatherIcon(props.date, props.label2)}></i>
                            <p className="temp">{props.temprature2}°C</p>
                        </div>
                        <div className="col wed">
                            <p className="day">{getNext2Day(props.date)}</p>
                            <i id="day-icon" className={"wi wi-" + getWeatherIcon(props.date, props.label3)}></i>
                            <p className="temp">{props.temprature3}°C</p>
                        </div>
                        <div className="col thu">
                            <p className="day">{getNext3Day(props.date)}</p>
                            <i id="day-icon" className={"wi wi-" + getWeatherIcon(props.date, props.label4)}></i>
                            <p className="temp">{props.temprature4}°C</p>
                        </div>
                        <div className="col fri">
                            <p className="day">{getNext4Day(props.date)}</p>
                            <i id="day-icon" className={"wi wi-" + getWeatherIcon(props.date, props.label5)}></i>
                            <p className="temp">{props.temprature5}°C</p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}