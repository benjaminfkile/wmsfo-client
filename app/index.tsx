import { FunctionComponent, useEffect } from "react"
import axios from "axios"
import { View, Text } from "react-native"
import Config from "@/config"

const Index: FunctionComponent<{}> = () => {

  useEffect(() => {
    axios.get(Config.API_URL)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <View>
      <Text>hi</Text>
    </View>
  )
}

export default Index
