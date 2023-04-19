import { Box, Button, Flex, Heading, HStack, Img, Link, Text, VStack, Wrap } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState, useStateRef} from 'react';
import { Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Cardrecipe = props => {
  const { Mealid } = useParams();
  const [item, setitem] = useState([]);

   
  
  const Getserch =  async () => {
    // e.preventDefault();
    const res =  await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`
    );
    const result = res.data.meals[0];
    setitem( await result);
     
  };
  console.log(item);
  useEffect(() => {
    
    return () => {
      Getserch();
    };
  },[]);
  

  

  return (
    <div>
      {/* <h1> get all information {Mealid} </h1> */}
      {
        (!item)? (
          <h2 display={'flex'} justifyContent={'center'}  fontSize={32}>Data is loading</h2>
        ) :(
          
          <Box padding={15}>
          <Flex justifyContent={'space-between'} paddingBottom={6}>

          <Heading fontSize={32} fontWeight={700}>Recipe Name: {item.strMeal}</Heading> 
          <Link href={item.strYoutube} target="_blank"> 
          <Button colorScheme='red'>Watch on Youtube</Button>
          </Link>
          </Flex>
          
           <Flex display={'flex'} justifyContent={'space-between'} padding={'15'}>
            
            <img src={item.strMealThumb} height={'400'} width={'400'} border-radius={'25px'} margin={20}/>

            <Box paddingLeft={12} > 
            <Heading fontSize={24} fontWeight={600}>
              { item.strMeal} Ingredient:
            </Heading>
            <Text paddingRight={3}> 1. { item.strIngredient1}  </Text>
            <Text>2. {item.strIngredient2}</Text>
            <Text>3. {item.strIngredient3}</Text>
            <Text>4. {item.strIngredient4}</Text>
            <Text>5. {item.strIngredient5}</Text>
            <Text>6. {item.strIngredient6}</Text>
            <Text>7. {item.strIngredient7}</Text>
            <Text>8. {item.strIngredient8}</Text>
            <Text>9. {item.strIngredient9}</Text>
            <Text>   {item.strIngredient10}</Text>
            <Text>   {item.strIngredient11}</Text>
            <Text>   {item.strIngredient12}</Text>
            <Text>   {item.strIngredient13}</Text>
            <Text>   {item.strIngredient14}</Text>
            <Text>   {item.strIngredient15}</Text>
            <Text>   {item.strIngredient16}</Text>
            <Text> {item.strIngredient17}</Text>
            <Text> {item.strIngredient18}</Text>
            </Box> 

            <Box>
            <Heading fontSize={24} fontWeight={600}>
              { item.strMeal} Measure According:
            </Heading>
            <Text>{item.strMeasure1}</Text>
            <Text>2. {item.strMeasure2}</Text>
            <Text>3. {item.strMeasure3}</Text>
            <Text>4. {item.strMeasure4}</Text>
            <Text>5. {item.strMeasure5}</Text>
            <Text>6. {item.strMeasure6}</Text>
            <Text>7. {item.strMeasure7}</Text>
            <Text>8. {item.strMeasure8}</Text>
            <Text>9. {item.strMeasure9}</Text>
            <Text>   {item.strMeasure10}</Text>
            <Text>   {item.strMeasure11}</Text>
            <Text>   {item.strMeasure12}</Text>
            <Text>   {item.strMeasure13}</Text>
            <Text>   {item.strMeasure14}</Text>
            <Text>   {item.strMeasure16}</Text>
            <Text>   {item.strMeasure17}</Text>
            <Text> {item.strMeasure18}</Text>
            <Text> {item.strMeasure19}</Text>

            </Box>
              
           </Flex>
            <Heading fontSize={24} fontWeight={600}>
              Instructions Read Carefully :
            </Heading>
            <HStack padding={15}>
            <Text fontSize='lg'>{item.strInstructions} </Text>
            </HStack>
          </Box>
          
        )
      }

      {/* {item && <>
        <Box padding={15}>
          <Flex justifyContent={'space-between'} paddingBottom={6}>

          <Heading fontSize={32} fontWeight={700}>Recipe Name: {item.strMeal}</Heading> 
          <Link href={item.strYoutube} target="_blank"> 
          <Button colorScheme='red'>Watch on Youtube</Button>
          </Link>
          </Flex>
          
           <Flex display={'flex'} justifyContent={'space-between'} padding={'15'}>
            
            <img src={item.strMealThumb} height={'400'} width={'400'} border-radius={'25px'} margin={20}/>

            <Box paddingLeft={12} > 
            <Heading fontSize={24} fontWeight={600}>
              { item.strMeal} Ingredient:
            </Heading>
            <Text paddingRight={3}> 1. { item.strIngredient1}  </Text>
            <Text>2. {item.strIngredient2}</Text>
            <Text>3. {item.strIngredient3}</Text>
            <Text>4. {item.strIngredient4}</Text>
            <Text>5. {item.strIngredient5}</Text>
            <Text>6. {item.strIngredient6}</Text>
            <Text>7. {item.strIngredient7}</Text>
            <Text>8. {item.strIngredient8}</Text>
            <Text>9. {item.strIngredient9}</Text>
            <Text>   {item.strIngredient10}</Text>
            <Text>   {item.strIngredient11}</Text>
            <Text>   {item.strIngredient12}</Text>
            <Text>   {item.strIngredient13}</Text>
            <Text>   {item.strIngredient14}</Text>
            <Text>   {item.strIngredient15}</Text>
            <Text>   {item.strIngredient16}</Text>
            <Text> {item.strIngredient17}</Text>
            <Text> {item.strIngredient18}</Text>
            </Box> 

            <Box>
            <Heading fontSize={24} fontWeight={600}>
              { item.strMeal} Measure According:
            </Heading>
            <Text>{item.strMeasure1}</Text>
            <Text>2. {item.strMeasure2}</Text>
            <Text>3. {item.strMeasure3}</Text>
            <Text>4. {item.strMeasure4}</Text>
            <Text>5. {item.strMeasure5}</Text>
            <Text>6. {item.strMeasure6}</Text>
            <Text>7. {item.strMeasure7}</Text>
            <Text>8. {item.strMeasure8}</Text>
            <Text>9. {item.strMeasure9}</Text>
            <Text>   {item.strMeasure10}</Text>
            <Text>   {item.strMeasure11}</Text>
            <Text>   {item.strMeasure12}</Text>
            <Text>   {item.strMeasure13}</Text>
            <Text>   {item.strMeasure14}</Text>
            <Text>   {item.strMeasure16}</Text>
            <Text>   {item.strMeasure17}</Text>
            <Text> {item.strMeasure18}</Text>
            <Text> {item.strMeasure19}</Text>

            </Box>
              
           </Flex>
            <Heading fontSize={24} fontWeight={600}>
              Instructions Read Carefully :
            </Heading>
            <HStack padding={15}>
            <Text fontSize='lg'>{item.strInstructions} </Text>
            </HStack>
          </Box>
         </> 
          }  */}

         
    </div>
  );
};

export default Cardrecipe;
