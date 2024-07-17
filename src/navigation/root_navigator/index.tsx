import { createStackNavigator } from "@react-navigation/stack";
import BottomNavigation from "../bottom_navigator";
import NewListScreen from "@app/screen/new_list";
import TodoItemsScreen from "@app/screen/task_todo";


const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
        />
        <RootStack.Screen name="newListScreen" component={NewListScreen} />
        <RootStack.Screen name="TodoItems" component={TodoItemsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
