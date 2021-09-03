import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Routes from "./Routes";
import COLORS from "./src/contants/theme";

export default function App() {
    const [isLoading, setisLoading] = React.useState(false); // loading io

    React.useEffect(() => {
        let id = setTimeout(() => {
            setisLoading(true);
        }, 1000);

        // unsubscribe
        return () => {
            clearTimeout(id);
        };
    }, []);

    return (
        <View style={styles.container}>
            {!isLoading && (
                <ActivityIndicator size="large" color={COLORS.blue} />
            )}
            {isLoading && <Routes />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: COLORS.white,
    },
});
