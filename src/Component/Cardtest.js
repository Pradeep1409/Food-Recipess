import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, HStack, Img, Link, Text, VStack, Wrap } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function Cardtest() {
  const { Mealid } = useParams(); // get the id parameter from the URL
  const [item, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const response = await axios.get( `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${Mealid}`)
      // console.log(response.data.meals[0]);
      setUser(response.data.meals[0])
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log(item)
  // display the recipe item
  return (
    // <div>
    //   {item ? (
    //     <>
    //     <Box padding={15}>
    //       <Flex justifyContent={'space-between'} paddingBottom={6}>

    //       <Heading fontSize={32} fontWeight={700}>Recipe Name: {item.strMeal}</Heading> 
    //       <Link href={item.strYoutube} target="_blank"> 
    //       <Button colorScheme='red'>Watch on Youtube</Button>
    //       </Link>
    //       </Flex>
          
    //        <Flex display={'flex'} justifyContent={'space-between'} padding={'15'}>
            
    //         <img src={item.strMealThumb} height={'400'} width={'400'} border-radius={'25px'} margin={20}/>

    //         <Box paddingLeft={12} > 
    //         <Heading fontSize={24} fontWeight={600}>
    //           { item.strMeal} Ingredient:
    //         </Heading>
    //         <Text paddingRight={3}> 1. { item.strIngredient1}  </Text>
    //         <Text>2. {item.strIngredient2}</Text>
    //         <Text>3. {item.strIngredient3}</Text>
    //         <Text>4. {item.strIngredient4}</Text>
    //         <Text>5. {item.strIngredient5}</Text>
    //         <Text>6. {item.strIngredient6}</Text>
    //         <Text>7. {item.strIngredient7}</Text>
    //         <Text>8. {item.strIngredient8}</Text>
    //         <Text>9. {item.strIngredient9}</Text>
    //         <Text>   {item.strIngredient10}</Text>
    //         <Text>   {item.strIngredient11}</Text>
    //         <Text>   {item.strIngredient12}</Text>
    //         <Text>   {item.strIngredient13}</Text>
    //         <Text>   {item.strIngredient14}</Text>
    //         <Text>   {item.strIngredient15}</Text>
    //         <Text>   {item.strIngredient16}</Text>
    //         <Text> {item.strIngredient17}</Text>
    //         <Text> {item.strIngredient18}</Text>
    //         </Box> 

    //         <Box>
    //         <Heading fontSize={24} fontWeight={600}>
    //           { item.strMeal} Measure According:
    //         </Heading>
    //         <Text>{item.strMeasure1}</Text>
    //         <Text>2. {item.strMeasure2}</Text>
    //         <Text>3. {item.strMeasure3}</Text>
    //         <Text>4. {item.strMeasure4}</Text>
    //         <Text>5. {item.strMeasure5}</Text>
    //         <Text>6. {item.strMeasure6}</Text>
    //         <Text>7. {item.strMeasure7}</Text>
    //         <Text>8. {item.strMeasure8}</Text>
    //         <Text>9. {item.strMeasure9}</Text>
    //         <Text>   {item.strMeasure10}</Text>
    //         <Text>   {item.strMeasure11}</Text>
    //         <Text>   {item.strMeasure12}</Text>
    //         <Text>   {item.strMeasure13}</Text>
    //         <Text>   {item.strMeasure14}</Text>
    //         <Text>   {item.strMeasure16}</Text>
    //         <Text>   {item.strMeasure17}</Text>
    //         <Text> {item.strMeasure18}</Text>
    //         <Text> {item.strMeasure19}</Text>

    //         </Box>
              
    //        </Flex>
    //         <Heading fontSize={24} fontWeight={600}>
    //           Instructions Read Carefully :
    //         </Heading>
    //         <HStack padding={15}>
    //         <Text fontSize='lg'>{item.strInstructions} </Text>
    //         </HStack>
    //       </Box>
    //     </>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>
    <>
        
      {loading || !item ? (
        <>
        <Box padding={15}>
          <Flex justifyContent={'space-between'} paddingBottom={6}>

          <Heading fontSize={32} fontWeight={700}>
            <Skeleton height={50} width={400} />
          </Heading> 
          <Link href='#'>
            <Button colorScheme='red' disabled>
              <Skeleton height={50} width={200} />
            </Button>
          </Link>
          </Flex>
          
          <Flex display={'flex'} justifyContent={'space-between'} padding={'15'}>
            
            <SkeletonCircle size={400} />

            <Box paddingLeft={12} > 
              <Heading fontSize={24} fontWeight={600}>
                <Skeleton height={30} width={400} />
              </Heading>
              <SkeletonText mt="4" noOfLines={20} spacing="4" />
            </Box> 

            <Box>
              <Heading fontSize={24} fontWeight={600}>
                <Skeleton height={30} width={400} />
              </Heading>
              <SkeletonText mt="4" noOfLines={20} spacing="4" />
            </Box>
              
           </Flex>
            <Heading fontSize={24} fontWeight={600}>
              Instructions Read Carefully :
            </Heading>
            <HStack padding={15}>
              <SkeletonText mt="4" noOfLines={10} spacing="4" />
            </HStack>
          </Box>
        </>
      ) :  (
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
    </>
    
  );
}

export default Cardtest;
