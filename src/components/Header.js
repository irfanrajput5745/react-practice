import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <>
    <div className='header '>
    <Container>


      <Link to="/">Home</Link>
      <Link to="about">about</Link>
      <Link to="contact">contact</Link>
    </Container>
    </div>
    </>
  );
}

export default Header;
