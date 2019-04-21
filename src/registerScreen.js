import { Navigation } from "react-native-navigation";
import SignIn from "./screens/login/SignIn"
import SignUp from "./screens/login/SignUp"
import SideNavigation from "./screens/SideNavigation"
import PayScreen from "./screens/pay/PayScreen"
import PreOrderScreen from "./screens/order/PreOrderScreen"
import MyRewardScreen from "./screens/rewards/MyRewardScreen"
import RewardsScreen from "./screens/rewards/RewardsScreen";

export function registerScreens(store, Provider) {
    // Navigation.registerComponentWithRedux('ComponentName', () => ComponentProvider, Provider, store);
    Navigation.registerComponentWithRedux('LiHOTea.SignIn', () => SignIn, Provider, store);
    Navigation.registerComponentWithRedux('LiHOTea.SignUp', () => SignUp, Provider, store);
    Navigation.registerComponentWithRedux('LiHOTea.SideNavigation', () => SideNavigation, Provider, store);
    Navigation.registerComponentWithRedux('LiHOTea.PayScreen', () => PayScreen, Provider, store);
    Navigation.registerComponentWithRedux('LiHOTea.PreOrderScreen', () => PreOrderScreen, Provider, store);
    Navigation.registerComponentWithRedux('LiHOTea.MyRewardScreen', () => MyRewardScreen, Provider, store);
    Navigation.registerComponentWithRedux('LiHOTea.RewardsScreen', () => { RewardsScreen, Provider,  store});
}