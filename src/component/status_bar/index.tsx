import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar, StatusBarProps } from "react-native";

function StatusBarConntent(props: StatusBarProps) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated {...props} /> : null;
}

export default StatusBarConntent;
