import { store } from "@/store"
import { Tabs } from "expo-router"
import { FunctionComponent } from "react"
import { Provider } from "react-redux"

const RootLayout: FunctionComponent<{}> = () => {
  return (
    <Provider store={store}>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Home", tabBarLabel: "🏠 Home" }} />
        <Tabs.Screen name="about" options={{ title: "About Us", tabBarLabel: "ℹ️ About" }} />
        <Tabs.Screen name="counter" options={{ title: "Counter", tabBarLabel: "🔢 Counter" }} />
      </Tabs>
    </Provider>
  )
}

export default RootLayout