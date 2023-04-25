import {WeatherSummary, WindDirection} from "./types";

import {
    WiCloud,
    WiDayCloudyHigh,
    WiDaySunny,
    WiDaySunnyOvercast,
    WiDirectionDown,
    WiDirectionDownLeft,
    WiDirectionDownRight,
    WiDirectionLeft,
    WiDirectionRight,
    WiDirectionUp, WiDirectionUpLeft,
    WiDirectionUpRight,
    WiRain,
    WiSnow
} from "react-icons/wi";
export const cities = [
    "Kyiv",
    "Lviv",
    "Dnipro",
    "Ivano-Frankivsk",
    "Zaporozhye",
    "Odessa",
    "Ternopil",
    "Vinnitsa",
    "Lutsk",
    "Khmelnitsky",
    "Cherkasy",
    "Rivne",
    "Mykolaiv",
    "Zhitomir",
    "Poltava",
    "Chernivtsi",
    "Chernigiv",
    "Kropyvnytskyi",
    "Sumi",
    "Uzhgorod",
    "Kherson",
    "Donetsk",
    "Simferopol",
    "Lugansk",
];


export const WeatherSummaryIconMap = {
    [WeatherSummary["Sunny"]]: WiDaySunny,
    [WeatherSummary["MostlySunny"]]: WiDaySunnyOvercast,
    [WeatherSummary["MostlyCloudy"]]: WiDayCloudyHigh,
    [WeatherSummary["Cloudy"]]: WiCloud,
    [WeatherSummary["Rain"]]: WiRain,
    [WeatherSummary["Snow"]]: WiSnow,
};
export const WindDirectionIconMap = {
    [WindDirection['North']]: WiDirectionUp,
    [WindDirection['NorthEast']]: WiDirectionUpRight,
    [WindDirection['East']]: WiDirectionRight,
    [WindDirection['SouthEast']]: WiDirectionDownRight,
    [WindDirection['South']]: WiDirectionDown,
    [WindDirection['SouthWest']]: WiDirectionDownLeft,
    [WindDirection['West']]: WiDirectionLeft,
    [WindDirection['NorthWest']]: WiDirectionUpLeft,
};

export interface WeatherResponse {
    date: string
    temperature: number
    feelsLikeTemperature: number
    windInfo: WindInfo
    summary: 0 | 1 | 2 | 3 | 4 | 5
}

export interface WindInfo {
    speed: number
    direction: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
}
