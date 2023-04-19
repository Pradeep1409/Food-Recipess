import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from '@chakra-ui/icons';
//   import Photo from "./Photo";
//   import Name from "./Name";
import "../Style/Navbar.css";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, isAuthenticated, } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div id="navFix">
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={9}
        width={['100%']}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack w="42%">
            {/* <Name /> */}
            <Text fontSize={'20px'} fontWeight={'bold'} justifyContent={'left'}>
              {' '}
              Food Recipe
            </Text>

            <Show breakpoint="(min-width: 1000px)"> {/* <Photo /> */}</Show>
          </HStack>

          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            {/* <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              /> */}

            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
                id="myDIV"
              >
                <Nav width={600}    >


                  <Button className="btnRes"  >
                    {/* <a href="/">
                    {' '}
                    <b>Home</b>
                  </a> */}
                    <Link to="/">Home</Link>
                  </Button>

                  <Button className="btnRes">
                    <Link to="/about">About</Link>
                  </Button>

                  <Button className="btnRes">
                    <Link to="https://www.themealdb.com/api.php" target={"_blank"}>Api Guide</Link>

                  </Button>



                  <Button className="btnRes">
                    <Link to="/contact">Contact</Link>
                  </Button>

                  {isAuthenticated ? ( <Button className="btnRes" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                    </Button>) :
                  <Button className="btnRes"onClick={() => loginWithRedirect()}>Log In </Button>}

                </Nav>
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
          <IconButton
            pr={0}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} pr={0} pt={250} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: '#FC0 1px 0 10px',
                    transform: 'scale(1.2)',
                  }}
                >
                  <a href="#Home">
                    {' '}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: '#FC0 1px 0 10px',
                    transform: 'scale(1.2)',
                  }}
                >
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: '#FC0 1px 0 10px',
                    transform: 'scale(1.2)',
                  }}
                >
                  <a href="#Skills">
                    {' '}
                    <b>Skills</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: '#FC0 1px 0 10px',
                    transform: 'scale(1.2)',
                  }}
                >
                  <a href="#Projects">
                    <b>Projects</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: '#FC0 1px 0 10px',
                    transform: 'scale(1.2)',
                  }}
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}
