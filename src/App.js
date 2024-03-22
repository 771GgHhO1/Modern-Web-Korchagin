import React from 'react';
import Button from './Button';
import Container from './Container';
import Navigation from './Navigation';
import './App.css';

const App = () => {
  const handleClick = () => {
    console.log('Кнопку ткнули!');
  };

  return (
    <div>
      <h1>Hello, World!</h1>
	  <Navigation />
      <Container>
        <Button onClick={handleClick} text="efsfees"/>
		
      </Container>
    </div>
  );
}

export default App;
