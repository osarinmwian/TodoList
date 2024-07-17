import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RootState } from "@app/redux/store";
import { useSelector } from "react-redux";
import CardScreen from "../card";
import { styles } from "./styles";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { COLORS } from "@assets/themes";
import { AntDesign } from "@expo/vector-icons";
import UpdateModal from "../update_modal/updateModal";

const MyTodoScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const todos = useSelector((state: RootState) => state.tasks.items);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSelectTodo = (id: string) => {
    setSelectedTodoId(id);
    setModalVisible(true);
  };

  if (isLoading) {
    return (
      <View style={{ marginVertical: "50%" }}>
        <View>
          <View
            style={{
              width: WP(10),
              height: WP(10),
              borderRadius: WP(10),
              backgroundColor: COLORS.lightGray,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <ActivityIndicator
              color={"blue"}
              style={{ opacity: 1, alignSelf: "center" }}
            />
          </View>
          <Text style={{ color: COLORS.gray, alignSelf: "center" }}>
            Task in progress ...
          </Text>
        </View>
      </View>
    );
  }

  if (todos.length === 0) {
    return (
      <View>
        <CardScreen icon="feather" size={WP(20)} />
        <Text style={styles.completeTodosText}>No Task Yet</Text>
        <Text style={styles.noTaskYetStyle}>
          Add Your to-dos and keep track of them
        </Text>
        <Text style={styles.noTaskYetStyle}>across google workspace</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={todos}
        numColumns={1}
        scrollEnabled={true}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.content}>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign
                  name="staro"
                  size={WP(5.6)}
                  color={COLORS.black}
                  style={styles.icon}
                />
                <Text style={styles.text}>
                  {item?.heading[0].toUpperCase() + item.heading.slice(1)}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => handleSelectTodo(item.id)}
                style={styles.touchable}
              >
                <Text style={styles.touchableText}>UPDATE TODO</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <UpdateModal
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(!isModalVisible)}
        selectedTodoId={selectedTodoId}
      />
    </View>
  );
};

export default MyTodoScreen;
