import { Text, StyleSheet, Platform } from "react-native";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',// load fonts from hooks
        fontSize: 30,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // you can also achieve this 
        // via Title.ios / Title.android 
        // and the system will auto detect the js file
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: 'white',
        // padding: 12,
        maxWidth: '80%',
        width: 300,
    }
});