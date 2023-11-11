// import BottomBar from "./src/navigations/BottomBar";
import StackNav from "./src/navigations/StackNav";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <StackNav />
      {/* <BottomBar/> */}
    </NavigationContainer>
    
  )
};

export default App; 