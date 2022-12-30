import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { palette } from './common/palette';
import styled from '@emotion/styled';

const moment = require('moment');

const Container = styled.div`
  min-width: 90vw;
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${palette.colors.darkGrey};
  padding-right: 1em;
`;

const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
const API_key = 'ab631d0dcad9307804c50fc29aa8fd88';
const Footer = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [temp, setTemp] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        let finalAPIEndPoint = `${API_endpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&appid=${API_key}`;
        axios
          .get(finalAPIEndPoint)
          .then((response) => {
            setTemp(response.data.main.temp - 273.15);
          })
          .err((err) => console.log(err));
      });
    };
    fetchData();
  }, [latitude, longitude, temp]);
  return (
    <Container>
      <h1 style={{ color: 'white', fontFamily: 'cursive' }}>
        {moment().format('dddd')}, {Math.round(temp * 100) / 100}&deg;C
      </h1>
    </Container>
  );
};

export default Footer;
