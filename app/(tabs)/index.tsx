import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const{ toggleDarkMode } = useTheme()

  // const todos = useQuery(api.todos.getTodos)
  // console.log(todos)

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Homepage</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Change the theme</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: { fontFamily: "OpenRunde-Medium", fontSize: 20 },
  container: { flex: 1, justifyContent: "center", alignItems: "center"}
})
