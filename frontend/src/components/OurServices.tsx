import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const OurServices = ({ image, title, description, price }: any) => {
    return (
        <View style={styles.cardContainer}>
            <Image 
                source={{ uri: image }} 
                style={styles.imageStyle} 
                resizeMode="cover" 
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>Rs. {price}</Text>
                <Link href={`/${1}`} style={styles.appointmentButton}>
                    <Text style={styles.buttonText}>View Details</Text>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
    },
    imageStyle: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    infoContainer: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#007BFF', // Change to your preferred color
    },
    appointmentButton: {
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#007BFF', // Button background color
        borderRadius: 5,
        alignItems: 'center',
        textAlign: 'center'
    },
    buttonText: {
        color: '#fff', // Button text color
        fontSize: 16,
        fontWeight: '600',
    },
});

export default OurServices;
