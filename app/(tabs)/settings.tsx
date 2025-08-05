import { View, Text, StyleSheet } from "react-native"

const SettingsScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Settings</Text>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
  textStyle: { fontFamily: "OpenRunde-Medium", fontSize: 20 },
  container: { flex: 1, justifyContent: "center", alignItems: "center"}
})