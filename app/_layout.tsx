import { Tabs } from "expo-router"
import { FunctionComponent } from "react"
 
const RootLayout: FunctionComponent<{}> = () => {
  return ( 
    <Tabs>
    <Tabs.Screen name="index" options={{ title: "Home", tabBarLabel: "🏠 Home" }} />
    <Tabs.Screen name="about" options={{ title: "About Us", tabBarLabel: "ℹ️ About" }} />
  </Tabs>
   )
}
 
export default RootLayout