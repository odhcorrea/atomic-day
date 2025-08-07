import { createHomeStyles } from "@/assets/styles/home.styles"
import { api } from "@/convex/_generated/api"
import useTheme from "@/hooks/useTheme"
import { Ionicons } from "@expo/vector-icons"
import { useMutation } from "convex/react"
import { useState } from "react"
import { Alert, TextInput, TouchableOpacity, View } from "react-native"

const TodoInput = () => {
    const { colors } = useTheme()
    const homeStyles = createHomeStyles(colors)

    const [newTodo, setNewTodo] = useState("")
    const addTodo = useMutation(api.todos.addTodo)

    const handleAddTodo = async () => {
        if(newTodo.trim()){
            try {
                await addTodo({ text: newTodo.trim() })
                setNewTodo("")
            } catch (error){
                console.log("Error adding Todo")
                Alert.alert("Error", "Failed to add Todo")
            }
        }else {
            Alert.alert("Empty input", "Add your Todo first")
        }
    }

    return(
        <View style={homeStyles.inputSection}>
            <View style={homeStyles.inputWrapper}>
                <TextInput 
                    style={homeStyles.input}
                    placeholder="Add your task"
                    value={newTodo}
                    onChangeText={setNewTodo}
                    onSubmitEditing={handleAddTodo}
                    placeholderTextColor={colors.textMuted}
                />

                <TouchableOpacity onPress={handleAddTodo} style={homeStyles.addButton}>
                    <Ionicons name="add" size={24} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TodoInput