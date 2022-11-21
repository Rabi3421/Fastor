import {
  Button,
  Container,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [otp, setOtp] = useState(0);
  const  navigate = useNavigate()
  let phone = JSON.parse(localStorage.getItem("phone"))
  console.log(phone)
  const handleClick = async () => {
    const res = await axios.post(
      "https://staging.fastor.in/v1/pwa/user/login",
      { phone:phone, otp: otp, dial_code: "+91" },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(res);
    localStorage.setItem("token",JSON.stringify(res.data.data.token))
      
    navigate("/restaurant")
    // if(otp == 123456){
    //     navigate("/restaurant")
    // }
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
      <HStack>
        <PinInput
          onChange={(e) => {
            setOtp(e);
          }}
          type="alphanumeric"
          mask
        >
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>

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

export default Login;
