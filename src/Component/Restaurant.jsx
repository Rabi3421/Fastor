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
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import offer from "../Image/offer.png";
import wallet from "../Image/wallet.png";

const Restaurant = () => {
  const [data, setData] = useState([]);
  //   const [rating,setRating] = useState([]);
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
  const ratingFunction = (e) => {
    let rating = Object.values(e.rating.all);
    let people = Object.keys(e.rating.all);
    let final = 0;
    for (let i = 0; i < rating.length; i++) {
      final = final + rating[i] * people[i];
    }
    return final;
  };
  useEffect(() => {
    items();
  }, []);
  return (
    <div>
      <Container>
        <Flex gap="80px">
          <Box>
            <Text>Karan</Text>
            <Text>Let's exploring this evening</Text>
          </Box>
          <Flex>
            <Image height="50px" width="50px" src={offer} alt="offer" />
            <Image height="80px" width="80px" src={wallet} alt="wallet" />
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
                src={e.images[0].url}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{e.restaurant_name}</Heading>
                  <Text>NewDelhi</Text>
                  <Text py="2">
                    Caffè latte is a coffee beverage of Italian origin made with
                    espresso and steamed milk.
                  </Text>
                </CardBody>

                <CardFooter>
                  <Flex style={{ justifyContent: "space-between" }} gap="80px">
                    <Box>
                      <Text>
                        {
                          <span>
                            <StarIcon /> {ratingFunction(e)}
                          </span>
                        }
                      </Text>
                      <Text>Popularity</Text>
                    </Box>
                    <Box>
                      <Flex>
                        <Text>{e.currency.symbol}</Text>
                        <Text>{e.avg_cost_for_two}</Text>
                      </Flex>
                      <Text>cost for two</Text>
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
