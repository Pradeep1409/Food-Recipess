import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Input,
  SimpleGrid,
  Stack,
  flexbox,
  Container,
  Center,
  Spacer,
} from '@chakra-ui/react';
import React, { useEffect, useState , } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  // FormHelperText,
} from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [search, setsearch] = useState('chicken');
  const [resultarr, setresultarr] = useState([]);
  const { loginWithRedirect } = useAuth0();
  const naviagte =useNavigate();
  const { user, isAuthenticated,   } = useAuth0();
  useEffect(() => {
    // preventDefault();
    Getserch();
  }, [search]);

  // console.log(res);

  const Changesearch = e => {
    console.log(e.target.value);
    setsearch(e.target.value);
    // console.log(res);
  };

  const Getserch = async () => {
    // event.preventDefault();
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    // console.log(res.data.meals)
    // const finalres=(res.data.meals);
    setresultarr(res.data.meals);
    console.log(res.data.meals);
    // console.log(res.data);
    console.log(resultarr);
  };

  return (
    <>  
    { isAuthenticated ? ( 
      <div>
      <Stack>
        <HStack p={50} display={'Flex'} justifyContent={'center'}>
          <FormControl width={1000}>
            <FormLabel fontWeight={700}>
              Enter the Name of Food Recipe
            </FormLabel>
            <Flex >
              <Input
                border="2px"
                borderColor="Blue.600"
                type="text"
                value={search}
                onChange={Changesearch}
                paddingRight={5}
              />
              <Button colorScheme="blue" onClick={Getserch}  marginLeft={5}>
                search
              </Button>
            </Flex>
          </FormControl>
        </HStack>
      </Stack>
      <div>
          <Center fontSize={32} fontWeight={700}>
            Recipes wow Welcome {user.name}
          </Center>
        </div>
       
         <Flex display={'flex'} flexWrap={'wrap'}>

         
        {resultarr == null ? (
          <Flex display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Heading color={'red.800'}> Sorry Not Found Try other Word </Heading>
          </Flex>
        ) : (
          resultarr.map((meals, idMeal) => (
            <div ClassName="col-4">
              {
                <Box padding={6}>
                  <Image
                    src={meals.strMealThumb}
                    alt="Image of recipe"
                    height={200}
                    width={200}
                    borderRadius="lg"
                  />
                  <Heading size="md" padding={2}>
                    {' '}
                    {meals.strMeal}
                  </Heading>
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    justifyContent="center"
                    key={meals.idMeal}
                    onClick={ () => { naviagte(`/${meals.idMeal}`)}}
                     
                  >
                    More Details
                  </Button>
                </Box>
              }
            </div>
          ))
        )}

        </Flex>

      </div>
    ) : 
     
     <div>

    <Flex alignItems="center" justifyContent="center" direction="column" height={'90vh'}>
      
     <Button onClick={() => loginWithRedirect()} size="lg">
        Log In to See Magic
      </Button>
       
      <h1 margin={100} >"A good password is like a good joke - it should be complex enough that no one can guess it, but not so complex that no one can remember it</h1>
    </Flex>
     
     </div>
 
    }
      </>
  );
};

export default Home;
