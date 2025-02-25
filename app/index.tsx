import { FunctionComponent, useEffect } from "react"
import axios from "axios"
import { View, Text } from "react-native"

const Index: FunctionComponent<{}> = () => {

  useEffect(() => {
    // axios.get("")
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }, [])


  return (
    <View>
      <Text>hi</Text>
    </View>
  )
}

export default Index
