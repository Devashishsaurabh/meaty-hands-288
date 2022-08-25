import React from 'react'
import styled from 'styled-components'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Box,  Input, useToast} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa';
import { Button, Center, Text } from '@chakra-ui/react';

const Logo=styled.img`
@media only screen and (max-width:1150px){
    width: 70%;
} 
`
const Form=styled.form`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center
`
const Login = ({ isOpen, onClose }) => {
  const navigate=useNavigate()
  const toast = useToast()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
 
    toast({
      title: 'Login Success.',
      description: "You Loging Successful",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
    navigate("/")
  }
  const handleChange=()=>{

  }
  const handlenavi=()=>{
     navigate("/signup")
  }
  
  return (
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={5}>
          <Logo src={"https://www.kindmeal.my/images/logo-kindmeal.png"} />
          <Text color="#666666">Member Login</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={5} >
          <Form onSubmit={handleSubmit}>
            <Input  width="65%" variant='outline' type={"email"} name="email" onChange={handleChange} placeholder="Your Email" isRequired/>
            <Input mt={3} width="65%" variant='outline' type={"password"} name="password" onChange={handleChange} placeholder="Your Password" isRequired/>
            <Input mt={6} width="45%" type={"submit"} onClick={onClose} value="Login" fontSize={20} fontWeight={700} bg="#04be5a" color="#ffffff"/>
          </Form>
          <br/>
          <hr/>
          <a href="https://www.kindmeal.my/login.php?action=facebook" target="blank">
          <Center p={8}>
          <Button onClick={onClose} w={'xs'}
            maxW={'sm'}
            colorScheme={'facebook'}
            leftIcon={<FaFacebook />}>
        <Center>
          <Text>Login With Facebook</Text>
          </Center>
          </Button>
         </Center>
         </a>
         <Box  display="flex" justifyContent='space-between' pb={3}>
            <Button bg="transparent" onClick={onClose}>Forgot Password ?</Button>
          
            <Button bg="transparent" onClick={onClose}>
              <p onClick={handlenavi}>
              Not a member? Sign up FREE!
              </p>
            </Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
   
  )
}

export default Login
