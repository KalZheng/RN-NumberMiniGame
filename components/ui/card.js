import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        marginHorizontal: 24,
        marginTop: deviceWidth < 380 ? 18 : 36,
        padding: 16,
        elevation: 4,//shadow for android
        //for ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});