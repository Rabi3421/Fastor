import {
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [mobile, setMobile] = useState(0);
  const  navigate = useNavigate()
  console.log(typeof mobile);
  const handleClick = async () => {
    const res = await axios.post(
      "https://staging.fastor.in/v1/pwa/user/register",
      { phone: (+mobile), dial_code: "+91" },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(res)
    console.log(res.data.status=="Success")
    if(res.data.status==="Success"){
        console.log("rabi")
        localStorage.setItem("phone",JSON.stringify(mobile))
        navigate("/login"); 
           
    }
  };
  return (
    <Container
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      p="30px"
    >
      <Heading align="left">Enter Your Mobile Number</Heading>
      <Text align="left" color="grey" mt="30px">
        We will send you the 4 digit verification code
      </Text>
      <Stack align="left" color="grey" mt="30px" spacing={3}>
        <Input
        //   type="number"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          variant="outline"
          placeholder="Enter Your Mobile Number"
        />
      </Stack>

      <Button
        onClick={handleClick}
        colorScheme="red"
        style={{ width: "100%" }}
        mt="30px"
      >
        Red
      </Button>
    </Container>
  );
};

export default Register;
