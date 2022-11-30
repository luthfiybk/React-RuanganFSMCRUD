import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Home, TambahRuangan, DetailRuangan, EditRuangan} from '../pages'

const Stack = createNativeStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
            <Stack.Screen name="TambahRuangan" component={TambahRuangan} options={{title: 'Tambah Ruangan'}} />
            <Stack.Screen name="DetailRuangan" component={DetailRuangan} options={{title: 'Detail Ruangan'}} />
            <Stack.Screen name="EditRuangan" component={EditRuangan} options={{title: 'Edit Ruangan'}} />
        </Stack.Navigator>
    )
}

export default Router