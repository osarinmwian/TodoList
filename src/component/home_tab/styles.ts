import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: WP(5.4),
    width: "90%",
    alignItems: "center",
    alignSelf: "center",
    height: WP(10.8),
    borderColor: COLORS.lightGray,
    borderBottomWidth: WP(0.15),
    marginVertical: WP(2),
  },
  text: {
    fontSize: SIZE.h6,
    color: COLORS.gray,
  },
  icon :{
    marginRight: WP(1),
    marginTop: WP(0.3)
  },
  touchable: {
    flexDirection: "row"
  },
  active: {
    fontSize: SIZE.h5,
    color: COLORS.primary,
    borderBottomWidth: WP(0.2),
    borderColor: COLORS.blue,
    paddingBottom: WP(2),
    borderStyle: "solid",
  },
});