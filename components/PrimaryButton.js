import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({ children, onPress }) {
    return (
        //here you switch view to be outside so that the ripple style can be shown correctly
        <View style={styles.buttonOuterContainer}>
            <Pressable
                // default pressable function {pressed} return true or false,
                // we are doing this because ios needs the ripple style
                style={({ pressed }) => pressed
                    ? [styles.pressed, styles.buttonInnerContainer]
                    : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: '#640233' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        //ensure style from inside 
        // does not shown on the outside
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,//shadow to android

    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    //for ios ripple you need an individual style for this
    pressed: {
        opacity: 0.75,
    },
});