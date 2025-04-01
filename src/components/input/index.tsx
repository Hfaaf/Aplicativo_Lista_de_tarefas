import React, { forwardRef, LegacyRef } from "react";
import { Text, View, TextInput, TextInputProps, TouchableOpacity } from "react-native";

import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";

import { style } from "./styles"
import { themas } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
}

export const Input = forwardRef((Props:Props,ref: LegacyRef<TextInput> | null) => {

    const {IconLeft,IconRight,IconLeftName,IconRightName,title,onIconLeftPress,onIconRightPress, ...rest} = Props
    const calculateSizeWidth = () => {
        if(IconLeft && IconRight )
        {
            return '80%'
        }
        else if (IconLeft || IconRight) 
        {
            return '90%'
        }
        else
        {
            return '100%'
        }
    }

    const calculatePaddingLeft = () => {
        if(IconLeft && IconRight )
        {
            return 15
        }
        else if (IconLeft || IconRight) 
        {
            return 15
        }
        else
        {
            return 20
        }
    }

    return (
        <>
            <Text style={style.titleInput}>{title}</Text>
            <View style={[
                style.boxInput, {paddingLeft:calculatePaddingLeft()}
            ]}>
                {IconLeft && IconLeftName && (
                <TouchableOpacity onPress={onIconLeftPress} style={{width: '10%'}}>
                    <IconLeft 
                    name={IconLeftName as any} 
                    size={20}
                    color={themas.colors.gray}
                    style={style.Icon}
                />
                </TouchableOpacity>
                )}

                <TextInput
                    style={[
                        style.input,
                        {width:calculateSizeWidth()}
                    ]}
                    {...rest}
                />
                {IconRight && IconRightName && (
                <TouchableOpacity onPress={onIconRightPress} style={{width: '10%'}}>
                    <IconRight 
                    name={IconRightName as any} 
                    size={20}
                    color={themas.colors.gray}
                    style={style.Icon}
                />
                </TouchableOpacity>
                )}
            </View>
        </>
    )
})