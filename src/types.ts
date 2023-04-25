export enum WindDirection {
    'North',
    "NorthEast",
    'East',
    "SouthEast",
    'South',
    "SouthWest",
    "West",
    "NorthWest",
}

export enum WeatherSummary {
    'Sunny',
    'MostlySunny',
    "MostlyCloudy",
    'Cloudy',
    'Rain',
    "Snow",
}

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
