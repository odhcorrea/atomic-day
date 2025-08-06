import { Feather } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import useTheme from "../../hooks/useTheme"

const TabsLayout = () => {
    const { colors } = useTheme()

    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'OpenRunde-Medium',
                fontSize: 12,
            },
            tabBarStyle: {
                backgroundColor: colors.bg,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: colors.border,        
                height: 60,        
                position: 'absolute', 
                marginHorizontal: 60,
                borderRadius: 100,
                bottom: 40,  
                //paddingTop: 2,
            },
            tabBarItemStyle: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                },
            tabBarIconStyle: {
                justifyContent: "center",
                alignItems: "center",
            },
            }}>

             <Tabs.Screen 
                name= "index"
                options={{
                    title: "Home",
                    tabBarIcon: ({color, size}) => (
                        <Feather name="activity" size={20} color={color} />
                    )
                }}
            />

            <Tabs.Screen 
                name= "reports"
                options={{
                    title: "Reports",
                    tabBarIcon: ({color, size}) => (
                        <Feather name="bar-chart-2" size={20} color={color} />
                    )
                }}
            />

            <Tabs.Screen 
                name= "profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({color, size}) => (
                        <Feather name="user" size={20} color={color} />
                    )
                }}
            />

             <Tabs.Screen 
                name= "settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({color, size}) => (
                        <Feather name="settings" size={20} color={color} />
                    )
                }}
            />

        </Tabs>
    )
}

export default TabsLayout