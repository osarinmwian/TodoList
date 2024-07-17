import { StyleSheet } from 'react-native';
import { COLORS, SIZE } from '@assets/themes';
import { widthPercentageToDP as WP } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    cardContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30%",
    },
    card: {
      width: WP(57),
      height: WP(39),
  
      marginBottom: WP(2),
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    paragraph: {
      fontSize: SIZE.h6,
      fontWeight: "bold",
      textAlign: "center",
      justifyContent: "center",
      padding: WP(5.4),
      marginBottom: WP(2.7),
    },
  });
