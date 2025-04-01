import { ActivityIndicator, Text, Touchable, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { style } from "./styles"

type props = TouchableOpacityProps & {
    text: string,
    loading?: boolean,
}

export function Button({ ...rest }: props) {
    return (
        <>
            <TouchableOpacity
                style={style.button}
                {...rest}
                activeOpacity={0.6}
            >
                {rest.loading ? <ActivityIndicator /> : <Text style={style.textButton}>{rest.text}</Text>}
            </TouchableOpacity>
        </>
    )
}