import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import React from 'react';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';

function HomePage() {
  return (
    <Container>
      <Box
        bg='white'
        borderRadius='lg'
        borderWidth='1px'
        padding={4}
        width='100%'
        justifyContent='center'
        margin='40px 0 15px 0'
      >
        <Text fontSize={'4xl'} fontFamily={'work sans'} color={'black'}>
          Talk A Tive
        </Text>
      </Box>

      <Box
        bg={'white'}
        borderRadius='lg'
        borderWidth='1px'
        padding={4}
        width='100%'
        justifyContent='center'
        margin='40px 0 15px 0'
        color={'black'}
      >
        <Tabs variant='soft-rounded'>
          <TabList>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
