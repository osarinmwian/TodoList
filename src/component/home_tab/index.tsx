import { Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "@assets/themes";
import NewListScreen from "@app/screen/new_list";
import { styles } from "./styles";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import MyTodoScreen from "@app/screen/my_todo";
import TodoItemsScreen from "@app/screen/task_todo";

const HomeTopTab = () => {
  const [layout, setLayout] = useState<"MyTodo" | "TodoItems" | "new List">(
    "MyTodo"
  );
  return (
    <>
      <View style={styles.container}>
        <AntDesign
          name="staro"
          size={WP(4)}
          color={COLORS.gray}
          style={styles.icon}
        />
        <TouchableOpacity>
          {layout === "MyTodo" ? (
            <Text allowFontScaling={false} style={styles.active}>
              My Todo
            </Text>
          ) : (
            <Text
              allowFontScaling={false}
              onPress={() => setLayout("MyTodo")}
              style={styles.text}
            >
              My Todo
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            allowFontScaling={false}
            style={layout === "TodoItems" ? styles.active : styles.text}
            onPress={() => setLayout("TodoItems")}
          >
            TodoItems
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <AntDesign
            name="plus"
            size={WP(3)}
            color={COLORS.gray}
            style={styles.icon}
          />
          <Text
            allowFontScaling={false}
            style={layout === "new List" ? styles.active : styles.text}
            onPress={() => setLayout("new List")}
          >
            New List
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {layout === "MyTodo" ? (
          <MyTodoScreen />
        ) : layout === "TodoItems" ? (
          <TodoItemsScreen />
        ) : layout === "new List" ? (
          <NewListScreen />
        ) : null}
      </View>
    </>
  );
};

export default HomeTopTab;
