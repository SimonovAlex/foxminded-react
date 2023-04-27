import React, {ChangeEvent, MouseEvent, useCallback, useState} from 'react';
import {Box, Button, Center, Select, Stack} from "@chakra-ui/react";
import {cities} from "./constants";
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import useAPI from "./API/useAPI";
import Item from "./components/Item";
import Error from "./components/Error";

function App() {

  const [date, setDate] = useState(new Date());
  const [city, setCity] = useState(cities[0]);

  const {data, fetchData, isLoading, error} = useAPI();


  const onSelectChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setCity(event.currentTarget.value)
  }, []);

  const onButtonClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    fetchData(city, date.toISOString());
  }, [fetchData ,date, city]);

  return (
<Center>
  <Stack direction='column' gap='1rem' width='30rem' mt="2rem">
    <Select value={city} onChange={onSelectChange}>
      {cities.map(c => <option key={c} value={c}>{c}</option>)}
    </Select>
    <SingleDatepicker
        name="date-input"
        date={date}
        onDateChange={setDate}
    />
    <Button colorScheme='orange' width='100%' onClick={onButtonClick} isLoading={isLoading} >Fetch data</Button>
    {data !== null && <Item date={data.date} windInfo={data.windInfo} summary={data.summary} temperature={data.temperature} feelsLikeTemperature={data.feelsLikeTemperature} />}
    {error !== null && <Error text={error}/>}
  </Stack>
</Center>
  );
}

export default App;
