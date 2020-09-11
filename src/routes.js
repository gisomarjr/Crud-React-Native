import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./pages/home/index";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Home,
        navigationOptions: {
          title: "Home - IFPE"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerStyle: {
          backgroundColor: "#5F9EA0"
        }
      }
    }
  )
);

export default Routes;
