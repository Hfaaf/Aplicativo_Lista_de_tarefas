import React, { useContext } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { style } from "./styles"
import { AntDesign, Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { themas } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

interface TabBarProps extends BottomTabBarProps {
}


export default ({ state, navigation }: TabBarProps) => {

    const { onOpen } = useContext<any>(AuthContextList)

    const go = (ScreenName: string) => {
        navigation.navigate(ScreenName)
    }

    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={() => go("List")}>
                <AntDesign
                    name="bars"
                    style={{ opacity: state.index === 0 ? 1 : 0.2, color: themas.colors.primary, fontSize: 22 }}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItemButtom} onPress={() => onOpen()}>
                <View style={{ width: "100%", left: 10, top: 4 }}>
                    <Entypo
                        name="plus"
                        style={{ color: "#fff" }}
                        size={40}
                    />
                </View>
                <View style={{ flexDirection: 'row-reverse', width: "100%", right: 10, bottom: 10 }}>
                    <MaterialIcons
                        name="edit"
                        style={{ color: "#fff" }}
                        size={30}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={() => go("User")}>
                <FontAwesome
                    name="user"
                    style={{ opacity: state.index === 1 ? 1 : 0.2, color: themas.colors.primary, fontSize: 32 }}
                />
            </TouchableOpacity>

        </View>

    )
};
