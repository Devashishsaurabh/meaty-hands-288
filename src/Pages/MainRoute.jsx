import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Login from '../Modal/Login'
import Help from './Help'
import Home from './Home'
import HotPicks from './HotPicks'
import KindMoments from './KindMoments'
import MealDeal from './MealDeal'
import Recipes from './Recipes'
import Signup from './Signup'
import Navbar from '../Components/Navbar'
import Logout from './Logout'

const MainRoute = () => {
  const location=useLocation()

      if(location.pathname==="*"||"/*"||"/not"){
        document.title="Page Not Found";
      }
   

  return (
    <div>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mealdeal" element={<MealDeal />} />
        <Route path="/kindmoments" element={<KindMoments />} />
        <Route path="/hotpicks" element={<HotPicks/>}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>
        <Route path="/help" element={<Help/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Flex flexDirection="column" align="center"justify="center">
        <Text fontSize="xl" textAlign="center">Page Not Found . . . .</Text>
        <Link to="/">
          <Button  bg="transparent" mt="5px">Click On Go Back</Button>
          </Link>
        </Flex>} />
      </Routes>
    </div>
  )
}

export default MainRoute