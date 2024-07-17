import { StyleSheet } from 'react-native';
import { COLORS} from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
      content: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
      },
      icon: {
        marginRight: WP(5),
        
      },
      text: {
        color: COLORS.black,
        marginTop: WP(1)
      }
});
