import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    Linking,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import InboxIcon from "../assets/icons/i-inbox.png";
import MenuIcon from "../assets/icons/i-menu.png";
import COLORS from "../contants/theme";

export default function Header() {
    // const [text, setText] = React.useState("Useless Text");
    const navigation = useNavigation();

    // function onchange value input search
    const onChangeText = () => {};

    return (
        <View style={styles.container}>
            <View style={styles.groupHeader}>
                <View style={styles.menu}>
                    <Icon name="place" color={COLORS.blue} size={20} />
                    <Text style={styles.title} numberOfLines={1}>
                        31 Lê Duẩn
                    </Text>
                </View>
                <View style={styles.menu}>
                    {/* <Text style={styles.icon}> */}
                    <TouchableWithoutFeedback
                        onPress={() =>
                            Linking.openURL("mailto:support@example.com")
                        }
                    >
                        <Image source={InboxIcon} style={styles.iconLeft} />
                    </TouchableWithoutFeedback>
                    {/* <Icon
                            name="mail"
                            color={COLORS.colorTextTiny}
                            size={22}
                        /> */}
                    {/* </Text> */}
                    {/* <Text style={styles.icon}> */}
                    <TouchableWithoutFeedback
                        onPress={() => navigation.openDrawer()}
                    >
                        {/* <Text style={styles.icon}> */}
                        <Image style={styles.icon} source={MenuIcon} />
                        {/* </Text> */}
                        {/* <Icon
                                name="menu"
                                color={COLORS.colorTextTiny}
                                size={22}
                            /> */}
                    </TouchableWithoutFeedback>
                    {/* </Text> */}
                </View>
            </View>
            <View style={styles.groupSearch}>
                <TouchableWithoutFeedback
                    onPress={() => alert("press icon search")}
                >
                    <Icon name="search" color={COLORS.textInput} size={25} />
                </TouchableWithoutFeedback>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder="Search for a restaurant or menu"
                    placeholderTextColor={COLORS.textInput}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: COLORS.colorBorder,
    },
    title: {
        paddingBottom: 15,
        paddingTop: 15,
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 2,
    },
    groupHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    menu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    iconLeft: {
        marginRight: 15,
        width: 27,
        height: 27,
    },
    icon: {
        width: 27,
        height: 27,
    },
    groupSearch: {
        position: "relative",
        backgroundColor: COLORS.bg,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
    },
    input: {
        height: 42,
        borderWidth: 0,
        padding: 10,
    },
    search: {
        width: 25,
        height: 25,
        marginRight: 5,
        // color: COLORS.textInput
    },
});
