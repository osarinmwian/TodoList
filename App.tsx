import "react-native-gesture-handler";
import RootNavigator from "@app/navigation/root_navigator";
import store from "@app/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
