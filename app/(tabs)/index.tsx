import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Homepage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: { fontFamily: "OpenRunde-Medium", fontSize: 20 },
  container: { flex: 1, justifyContent: "center", alignItems: "center"}
})
