import { Todo } from "@app/interface";
import { AppDispatch, RootState } from "@app/redux/store";
import { deleteTodo } from "@app/redux/store/taskSlice";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { COLORS } from "@assets/themes";
import { styles } from "./styles";

const NewListScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.tasks.items);

  const handleDelete = (todo: Todo) => {
    dispatch(deleteTodo(todo.id));
  };
  return (
    <SafeAreaView>
      <FlatList
        data={todos}
        numColumns={1}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.content}>
              <AntDesign
                name="staro"
                size={WP(5.6)}
                color={COLORS.black}
                style={styles.icon}
              />

              <Text style={styles.text}>
                {item.heading[0].toUpperCase() + item.heading.slice(1)}
              </Text>
            </View>
            <MaterialIcons
              name="delete"
              size={22}
              color={COLORS.black}
              onPress={() => handleDelete(item)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default NewListScreen;
