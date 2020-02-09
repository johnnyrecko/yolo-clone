import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { SIGN_IN_SCREEN } from "./screens/SIGNIN_SCREEN"
import { MAIN_SCREEN } from "./screens/MAIN_SCREEN"
import { SHARE_SCREEN } from "./screens/SHARE_SCREEN"

const rootNavigator = createStackNavigator({
  MAIN_SCREEN: {
    screen: MAIN_SCREEN
  },
  SHARE_SCREEN: {
    screen: SHARE_SCREEN
  },
  SIGNIN_SCREEN: {
    screen: SIGN_IN_SCREEN
  },
}, {headerMode: "none"})

export default createAppContainer(rootNavigator)
