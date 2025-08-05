import { View, Text, StyleSheet } from "react-native"

const Profile = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>Profile</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
  textStyle: { fontFamily: "OpenRunde-Medium", fontSize: 20 },
  container: { flex: 1, justifyContent: "center", alignItems: "center"}
})