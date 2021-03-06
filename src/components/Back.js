import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../contants/theme";

export default function Back({ children }) {
    const naviagtion = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => naviagtion.goBack()}>
                    <Icon name="west" color={COLORS.dark} size={20} />
                </TouchableWithoutFeedback>
            </View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingBottom: 115,
        backgroundColor: COLORS.white,
        flex: 1,
    },
    header: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: COLORS.colorBorder,
    },
});
