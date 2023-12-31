import { Center, Heading, HStack, Image, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    
    <Wrap align='left' bg='white' rounded='lg' >
     
      <Image src={imageSrc} rounded='md'/>   
    
   
     <Heading color='black' padding='10px'>{title}</Heading>
     <Text color='black' padding='10px'>{description}</Text>
      <Text color='black' padding='10px'>See More <FontAwesomeIcon icon={faArrowRight} size="1x" /></Text>
    

    </Wrap>
  
  )
  
};



export default Card;
