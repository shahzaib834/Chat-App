import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();
  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);
    if (!name || !password || !confirmPassword || !email) {
      toast({
        title: 'Please fill all the fields',
        status: 'warning',
        duration: 5000,
        isCrossable: true,
        position: 'bottom',
      });
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: "Password dosn't match",
        status: 'warning',
        duration: 5000,
        isCrossable: true,
        position: 'bottom',
      });
      return;
    }

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/user',
        { name, email, password },
        config
      );

      console.log(data);

      toast({
        title: 'Signed Up Succesfully',
        status: 'success',
        duration: 5000,
        isCrossable: true,
        position: 'bottom',
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);
      history.push('/chat');
    } catch (error) {
      toast({
        title: `Error Occured: ${error.message}`,
        status: 'error',
        duration: 5000,
        isCrossable: true,
        position: 'bottom',
      });
    }
  };

  const postDetails = () => {
    // here will be the logic of uploading picture to the database. But for now default picture will be uploaded.
    // We can use Codenary to do this task later on.
  };

  return (
    <VStack spacing={'5px'}>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder='Enter your name'
          required
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='example123@provider.com'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={'md'}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder='Password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={'4.5rem'}>
            <Button
              height={'1.75rem'}
              size='sm'
              borderRadius={'150px'}
              onClick={() => setShowPassword(!showPassword)}
            >
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size={'md'}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder='Confirm Password'
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width={'4.5rem'}>
            <Button
              height={'1.75rem'}
              size='sm'
              borderRadius={'150px'}
              onClick={() => setShowPassword(!showPassword)}
            >
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='pic'>
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type='file'
          p={1.5}
          accept='image/*'
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default SignUp;
