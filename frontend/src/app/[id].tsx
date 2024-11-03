import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const DetailsPage = () => {
    const image = "https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const title = "Medical Emergency";
    const description = "lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eveniet? Explicabo suscipit cupiditate sequi soluta numquam itaque inventore aliquid molestiae veniam accusamus. ";

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: image }} 
                style={styles.imageStyle} 
                resizeMode="cover" 
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <Link href="/Appointment" style={styles.appointmentButton}>
                    <Text style={styles.buttonText}>Book Appointment</Text>
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    imageStyle: {
        width: '100%',
        height: 250,
        borderRadius: 15,
    },
    infoContainer: {
        marginTop: 15,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    appointmentButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

export default DetailsPage;

 