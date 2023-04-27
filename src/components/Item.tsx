import React from 'react';
import {Stack, Text} from "@chakra-ui/react";
import {WeatherResponse, WeatherSummary, WindDirection} from "../types";
import {WeatherSummaryIconMap, WindDirectionIconMap} from "../constants";

interface Props  extends WeatherResponse{

}
const Item = ({ date, summary, feelsLikeTemperature, temperature, windInfo }: Props) => {

    const WeatherIcon = WeatherSummaryIconMap[summary];
    const WindIcon = WindDirectionIconMap[windInfo.direction];

    return (
        <Stack>
            <Text>
                Date: {date}
            </Text>
            <Text display='inline-flex'>
                summary: <WeatherIcon />  {WeatherSummary[summary]}
            </Text>
            <Text>
                temperature: {temperature}&#8451;
            </Text>
            <Text>
                feelsLikeTemperature: {feelsLikeTemperature}&#8451;
            </Text>
            <Text  display='inline-flex'>
                windInfo: <WindIcon /> {WindDirection[windInfo.direction]} {windInfo.speed} M/S
            </Text>
        </Stack>
    );
};

export default Item;