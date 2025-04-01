import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Lana del Rey</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        marginTop: 20,
        paddingVertical: 20,
        backgroundColor: "#d25f9c",
        width: "100%",
        alignItems: "center",
    },
    footerText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});