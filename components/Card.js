import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: "https://i.pinimg.com/736x/4a/ca/0c/4aca0cf27637e974680e241ff58bdd05.jpg" }}
                style={styles.image}
            />
            <Text style={styles.title}>Lana del Rey</Text>
            <Text style={styles.description}>
            É uma cantora, compositora e poetisa americana conhecida por seu estilo musical cinematográfico e letras nostálgicas.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f5dfeb",
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: 300,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 270,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "gray",
    },
});