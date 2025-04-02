import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/input";
import { MaterialIcons } from "@expo/vector-icons";
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themas } from "../../global/themes";

type propCard = {
    item: number,
    title: string,
    description: string,
    flag: 'urgente' | 'opcional'
}

const data: Array<propCard> =
    [
        {
            item: 0,
            title: "Realizar a lição de casa",
            description: 'Página 10 a 20',
            flag: 'urgente'
        },
        {
            item: 1,
            title: "Passear com o cachorro",
            description: 'Página 10 a 20',
            flag: 'urgente'
        },
        {
            item: 2,
            title: "Sair para tomar açai",
            description: 'Página 10 a 20',
            flag: 'urgente'
        }
    ]

export default function List() {

    const _renderCard = (item: propCard) => {
        return (
            <TouchableOpacity style={style.card}>
                <View style={style.rowCard}>
                    <View style={style.rowCardLeft}>
                        <Ball
                            color="red"
                        />
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                    </View>
                    <Flag 
                    caption="urgente"
                    color={themas.colors.red}
                    />

                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia, <Text style={{ fontWeight: 'bold' }}>Heitor F</Text></Text>
                <View style={{ width: '80%', marginTop: -35 }}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={data}
                    style={{ marginTop: 40, paddingHorizontal: 30, }}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => {
                        return (_renderCard(item))
                    }}
                />
            </View>
        </View>
    )
}