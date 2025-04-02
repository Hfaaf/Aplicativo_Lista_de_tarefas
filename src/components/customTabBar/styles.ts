import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({

    tabArea:
    {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    },

    tabItem:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tabItemButtom:
    {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        top: -30,
        backgroundColor: themas.colors.primary
    }
})