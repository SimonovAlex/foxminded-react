import {useCallback, useState} from "react";
import {WeatherResponse} from "../types";

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

const baseURL = 'https://sample-weather-api.herokuapp.com'

const useAPI = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<WeatherResponse | null>(null);


    const fetchData = useCallback(async (city: string, requestedTime: string) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        fetch(`${baseURL}/WeatherForecast?City=${city}&RequestedTime=${requestedTime}`)
            .then(async response => {
                if(response.ok){
                    const d = await response.json() as WeatherResponse;
                    setData(d)
                }
                if(response.status >= 400){
                    setError('Input incorrect');
                }

                if(response.status >= 500){
                    setError('Something wrong 2');
                }
            }).catch(() => setError('Something wrong 1')).finally(() => setIsLoading(false))
    }, []);


    return {fetchData, isLoading, error, data}
}
export default useAPI;