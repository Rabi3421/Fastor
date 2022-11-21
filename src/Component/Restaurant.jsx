import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import offer from "../Image/offer.png";
import wallet from "../Image/wallet.png";

const Restaurant = () => {
  const [data, setData] = useState([]);
  const [rating,setRating] = useState([]);
  let token = JSON.parse(localStorage.getItem("token"));
  const items = () => {
    axios
      .get(`https://staging.fastor.in/v1/m/restaurant?city_id=118&&${token}`, {
        headers: {
          Authorization: token,
        },
      })

      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  };
  useEffect(() => {
    items();
  }, []);
  return (
    <div>
      <Container>
        <Flex>
          <Box>
            <Text>Karan</Text>
            <Text>Let's exploring this evening</Text>
          </Box>
          <Flex>
            <Image src={offer} alt="offer" />
            <Image src={wallet} alt="wallet" />
          </Flex>
        </Flex>
        <Flex>
          <Text>Your taste</Text>
          <Text>see all</Text>
        </Flex>
        <Text>Popular Ones</Text>
        <SimpleGrid columns={1} spacing={10}>
          {data.map((e) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">The perfect latte</Heading>

                  <Text py="2">
                    Caffè latte is a coffee beverage of Italian origin made with
                    espresso and steamed milk.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Flex>
                    <Box>
                      <Text>{
                        4.5
                      }</Text>
                      <Text>Popularity</Text>
                    </Box>
                    <Box>
                      <Text></Text>
                      <Text></Text>
                    </Box>
                  </Flex>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Restaurant;
