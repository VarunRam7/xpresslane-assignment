import React, { useEffect, useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { TextField } from '@material-ui/core';
import { palette } from './common/palette';
import styled from '@emotion/styled';

const Container = styled.div`
  min-width: 90vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: cursive;
  background-color: ${palette.colors.darkGrey};
  .MuiFormControl-root {
    width: 75px;
  }
  .MuiTypography-body1 {
    color: ${palette.colors.white};
  }
  .MuiInputLabel-root {
    color: white;
  }
  .MuiInputBase-input {
    color: white;
  }
`;

const NavbarTextWrapper = styled.h3`
  color: ${palette.colors.white};
  width: 200px;
`;
const Navbar = ({ setToggle, toggle }) => {
  const [exchangeRate, setExchangeRate] = useState();
  const [value, setValue] = useState(0);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('apikey', '1RbWsMH12XqwS1l8wR5QA558BUuFzL1u');
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
    <Container>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '3em' }}>
        <TextField
          id='outlined-number'
          label='USD'
          type='number'
          InputLabelProps={{
            shrink: true,
          }}
          defaultValue='0'
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <NavbarTextWrapper>INR :: {exchangeRate}</NavbarTextWrapper>
      </div>
      <NavbarTextWrapper>NAVBAR</NavbarTextWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          fontSize: '1rem',
          fontWeight: '400px',
          color: `${palette.colors.white}`,
        }}
      >
        <h4>Dark</h4>
        <FormControlLabel
          style={{ marginLeft: '1em' }}
          control={
            <Switch
              checked={toggle}
              onChange={() => {
                setToggle(!toggle);
              }}
              color='primary'
            />
          }
        />
        <h4>Light</h4>
      </div>
    </Container>
  );
};

export default Navbar;
