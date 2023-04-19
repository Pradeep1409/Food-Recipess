import React, { useState } from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { NavLink, Stack, Nav, Navbar } from 'react-bootstrap';
import { Box, Container, Flex, Link, Spacer, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
    <div>

    
      <Flex
        display="flex"
        justifyContent="space-between"
        padding={'20px'}
        paddingTop={'5px'}
        alignItems={'center'}
      >
        <Text fontSize={'20px'} fontWeight={'bold'}>
          {' '}
          Food Recipe
        </Text>
        <Container
          width={'250px'}
          display="flex"
          justifyContent="space-between"
          textDecoration="none"
        >
          <div>

          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Dashboard</Link>
          </nav>
          </div>
          {/* <Navbar>
            <Container>
              <Nav.Item>
              <NavLink to="/">Home</NavLink>
              </Nav.Item>
              <Nav.Item>
              <NavLink to="/about">About</NavLink>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link to="/guide">Guide</Nav.Link>
              </Nav.Item>
            </Container>
          </Navbar> */}

          {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/guide">Api Guide</NavLink> */}
        </Container>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      </div>
    </>
  );
};

export default Header;
