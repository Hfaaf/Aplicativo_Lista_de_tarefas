import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop:
    {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxMid:
    {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        //backgroundColor: 'green',
        paddingHorizontal: 37,
    },
    boxBottom:
    {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
    },
    title:
    {
        fontWeight: 'bold',
        marginTop: 40,
        fontSize: 18,
    },
    button: 
    {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.primary,
        borderRadius: 40,
        marginTop: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation:7,
    }

})