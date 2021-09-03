import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CustomDrawerContent from "./src/components/CustomDrawerContent";
import Navbar from "./src/components/Navbar";
import Detail from "./src/screens/Category/Detail";
import ListCategory from "./src/screens/Category/ListCategory";
import NotFound from "./src/screens/NotFound";

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{ headerShown: false }}
                initialRouteName="Home"
            >
                <Drawer.Screen name="Home" component={ListCategory} />
                <Drawer.Screen name="Detail" component={Detail} />
                <Drawer.Screen name="Navbar" component={Navbar} />
                <Drawer.Screen name="NotFound" component={NotFound} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
