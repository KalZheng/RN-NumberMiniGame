import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

//use style ass props
function InstructionText({ children, style }) {
    return (
        // this allow to merge style
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});