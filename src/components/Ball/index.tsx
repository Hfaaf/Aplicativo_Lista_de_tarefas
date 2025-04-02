import { View } from "react-native"
import { style } from "./styles"

type props = {
    color: string
}

export function Ball({ ...rest }: props) {
    return (
        <View style={[style.ball, { borderColor: rest.color || 'gray' }]}>

        </View>
    )
}