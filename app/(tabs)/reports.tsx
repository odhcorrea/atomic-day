import { View, Text, StyleSheet } from "react-native"

const Reports = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Reports</Text>
        </View>
    )
}

export default Reports

const styles = StyleSheet.create({
  textStyle: { fontFamily: "OpenRunde-Medium", fontSize: 20 },
  container: { flex: 1, justifyContent: "center", alignItems: "center"}
})