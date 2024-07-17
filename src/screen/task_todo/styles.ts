import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: WP(3),
    marginTop: WP(1.875),
    marginBottom: WP(1.875),
    borderColor: COLORS.lightGray,
    borderWidth: WP(0.2),
    borderRadius: WP(2),
    paddingHorizontal: WP(3),
    paddingVertical: WP(3),
  },
  completeTodos: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: WP(3),
    marginTop: WP(20),
    marginBottom: WP(1.875),
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    borderWidth: WP(0.2),
    borderRadius: WP(2),
    paddingHorizontal: WP(3),
    padding: WP(3),
 
    
  },
  completeTodosText: {
    color: COLORS.gray,
    alignSelf: "center",
    marginTop: WP(6),
    fontSize: SIZE.h8,
  
  },
  undoText: {
    color: COLORS.blue,
    marginTop: WP(1),
    fontWeight:"bold"
  },
  niceWorkStyle: {
    color: COLORS.gray,
    alignSelf: "center",
    marginTop: WP(3),
  
  },
  taskCompleted: {
    color: COLORS.gray,
    alignSelf: "center",
  },
});
