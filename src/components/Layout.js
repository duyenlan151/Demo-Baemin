import React from "react";
import { StyleSheet, View } from "react-native";
import COLORS from "../contants/theme";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <View style={styles.container}>
            {/* <View> */}
            <Header />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 115,
        backgroundColor: COLORS.white,
    },
});
