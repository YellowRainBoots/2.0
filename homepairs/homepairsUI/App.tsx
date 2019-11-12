import {createAppContainer, createSwitchNavigator, } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Components/Screens/Main/HomeScreen.native';
import LoadingScreen from './Components/Screens/LoadingScreen';
import SignUpScreen from './Components/Screens/Auth/SignUpScreen/SignUpScreen';
import LoginScreen from './Components/Screens/Auth/LoginScreen/LoginScreen';



const authStackConfig = {
  defaultNavigationOptions: {
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000',
    },
    headerShown: false,
  }
}

const MainStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ Login: LoginScreen, SignUp: SignUpScreen},  authStackConfig);

export default createAppContainer(createSwitchNavigator(
  {
    Main: MainStack,
    Auth: AuthStack,
    Loading: LoadingScreen,
  },
  {
    initialRouteName: 'Loading',
  }
));

