import { createHomeStyles } from "@/assets/styles/home.styles";

import Header from "@/components/Header";
import LoadingSpinner from "@/components/LoadingSpinner";
import TodoInput from "@/components/TodoInput";

import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";

import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Todo = Doc<"todos">

export default function Index() {
  const{ toggleDarkMode, colors } = useTheme()

  const homeStyles = createHomeStyles(colors)

  const todos = useQuery(api.todos.getTodos)

  const isLoading = todos === undefined

  if(isLoading) return <LoadingSpinner />

  // const handleToggleTodo = async (id:Id<"todos">) => {
  //   return(

  //   )
  // }

  const renderTodoItem = ({ item }: { item:Todo}) => {
    return(
      <View style={homeStyles.todoItemWrapper}>
        <View style={homeStyles.todoItem}>
          <TouchableOpacity style={homeStyles.checkbox} /*onPress={() => /handleToggleTodo(item._id)}*/>
            <LinearGradient
              colors={item.isCompleted ? colors.gradients.success : colors.gradients.background}
              style={[homeStyles.checkboxInner, {borderColor: item.isCompleted ? "transparent" : colors.border},]}
            >
              { item.isCompleted && <Ionicons name="checkmark" size={18} color={"fff"}/> }
            </LinearGradient>
          </TouchableOpacity>
          {item.text}
        </View>
      </View>
    )
  }

  return (
      <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
        
        <StatusBar />

        <SafeAreaView style={homeStyles.container}>
          <Header />
          <TodoInput />

          <FlatList 
            data={todos}
            renderItem= {({item}) => <Text>{item.text}</Text>}//{renderTodoItem}
            keyExtractor={item => item._id}
            style={homeStyles.todoListContent}
          />
        </SafeAreaView>

      </LinearGradient>
  );
}
