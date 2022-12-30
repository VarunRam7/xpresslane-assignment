import React, { useEffect, useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { TextField } from '@material-ui/core';
import styled from '@emotion/styled';

const Container = styled.div`
  min-width: 90vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(toggle) => (toggle ? 'white' : 'white')};
  .MuiFormControl-root {
    width: 75px;
  }
`;

const NavbarTextWrapper = styled.h3`
  color: ${(toggle) => (toggle ? 'black' : 'black')};
  width: 200px;
`;
const Navbar = (props) => {
  const [exchangeRate, setExchangeRate] = useState();
  const [value, setValue] = useState(1);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('apikey', 'jxG97c8AXMeiH3qBz4LPFy5zCRc7yCMu');
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=INR&from=USD&amount=${value}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setExchangeRate(data.result))
      .catch((error) => console.log('error', error));
  }, [value, exchangeRate]);
  return (
    <Container toggle={props.toggle}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '3em' }}>
        <TextField
          id='outlined-number'
          label='USD'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <NavbarTextWrapper toggle={props.toggle}>
          INR :: {exchangeRate}
        </NavbarTextWrapper>
      </div>
      <NavbarTextWrapper toggle={props.toggle}>NAVBAR</NavbarTextWrapper>
      <FormControlLabel
        style={{ marginLeft: '1em' }}
        control={
          <Switch
            checked={props.toggle}
            onChange={() => {
              props.setToggle(!props.toggle);
            }}
            color='primary'
          />
        }
      />
    </Container>
  );
};

export default Navbar;
