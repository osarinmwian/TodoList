import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    modal: {
        width: "99%",
        borderTopLeftRadius: WP(6),
        borderTopRightRadius: WP(6),
        height: WP(100),
        backgroundColor: COLORS.lightBlack,
        padding: WP(2.7),
        alignSelf: "center",
        marginTop: WP(10),
      },
      textIputView: {
        marginTop: WP(20),
      },
      touchable: {
        marginVertical: WP(2),
        backgroundColor: COLORS.purple,
        width: WP(20),
        borderRadius: WP(2),
        padding: WP(2.5),
        marginTop: WP(5),
        alignSelf: "flex-end",
      },
      text: {
        color: COLORS.white,
        alignSelf: "center",
      },
      addTask: {
        marginVertical: WP(4),
        alignSelf: "center",
        color: COLORS.purple,
        fontSize: SIZE.h8,
        fontWeight: "bold",
      },
      container: {
        flex: 1,
        backgroundColor: COLORS.black,
      },
      contentContainer: {
        flex: 1,
        borderTopRightRadius: WP(6),
        paddingHorizontal: WP(2),  
      },
      pressable: {
        flexDirection: 'row',
        marginHorizontal: WP(5),
        marginVertical: WP(2.5),
      },
      image: {
        marginTop: WP(2),
      },
      textStyle: {
        color: COLORS.gray,
        fontSize: SIZE.h8,
        fontWeight: '400',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: WP(0.5),
        marginHorizontal: WP(2),
        marginTop: WP(1.5),
      },
      icon: {
        color: COLORS.gray,
        marginTop: WP(1.5),
      },
      activityTextStyle: {
        color: COLORS.black,
        fontSize: SIZE.h8,
        fontWeight: '400',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: WP(2),
        marginVertical: WP(4),
      },
      pressableActivity: {
        marginHorizontal: WP(5),
        flexDirection: 'row',
        marginBottom: WP(2),
      },
});
