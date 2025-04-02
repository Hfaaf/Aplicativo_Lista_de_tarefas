import { Text, TouchableOpacity, View } from "react-native"
import { style } from "./styles"

type props = {
    caption: string,
    color: string
}

export function Flag({ ...rest }: props) {
    return (
        <TouchableOpacity style={[style.container, { backgroundColor: rest?.color}]}>
            <Text style={{color: '#fff'}}>{rest.caption}</Text>
        </TouchableOpacity>
    )
}