import {useCallback, useState} from "react";
import {WeatherResponse} from "../types";

const baseURL = 'https://sample-weather-api.herokuapp.com'

const responseData: WeatherResponse = {
    "date": "2023-04-28T12:00:00Z",
    "temperature": 14.19,
    "feelsLikeTemperature": 12.63,
    "windInfo": {
        "speed": 4.75,
        "direction": 0
    },
    "summary": 1
}

const useAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<WeatherResponse | null>(null);


    const fetchData = useCallback(async (city: string, requestedTime: string) => {
        setData(responseData)
    }, []);


    return {fetchData, isLoading, error, data}
}
export default useAPI;