import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { palette } from './common/palette';
import styled from '@emotion/styled';

const Container = styled.div`
  padding-top: 5vh;
  gap: 2em;
  min-width: 90vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.toggle ? 'white' : 'black')};
`;

const InputFieldContainer = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: row;
  .MuiButton-root {
    min-width: 175px;
    color: ${palette.colors.primary};
  }
  .MuiInputBase-inputTypeSearch {
    color: ${palette.colors.primary};
  }

  .MuiFormLabel-root {
    color: ${(props) =>
      props.toggle ? `${palette.colors.black}` : `${palette.colors.white}`};
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  overflow-x: auto;
  padding-left: 10px;
  .MuiTypography-h5 {
    width: 150px;
    text-align: center;
  }
`;
const Home = ({ toggle }) => {
  const [components, setComponents] = useState(['']);

  const [text, setText] = useState('');
  function addComponent(text) {
    setComponents([...components, text]);
  }

  return (
    <Container toggle={toggle}>
      <InputFieldContainer toggle={toggle}>
        <TextField
          style={{ borderBottom: '0.5px solid white' }}
          id='filled-search'
          label='Input field'
          type='search'
          variant='filled'
          color='primary'
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant='contained'
          onClick={() => {
            addComponent(text);
          }}
        >
          Add
        </Button>
      </InputFieldContainer>
      <CardContainer>
        {components.map((item, i) => {
          return (
            i !== 0 &&
            item !== '' && (
              <Card
                style={{
                  width: '150px',
                  height: '150px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'auto',
                }}
              >
                <Typography variant='h5'>{item}</Typography>
              </Card>
            )
          );
        })}
      </CardContainer>
    </Container>
  );
};

export default Home;
