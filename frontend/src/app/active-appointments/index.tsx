import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Dummy data for active appointments
const activeAppointments = [
    {
        id: '1',
        customerName: 'Alice Johnson',
        serviceName: 'Dental Checkup',
        address: '123 Maple St, Springfield',
    },
    {
        id: '2',
        customerName: 'Bob Smith',
        serviceName: 'Haircut',
        address: '456 Oak Ave, Springfield',
    },
    {
        id: '3',
        customerName: 'Charlie Brown',
        serviceName: 'Massage Therapy',
        address: '789 Pine Rd, Springfield',
    },
];

const ActiveAppointments = () => {
    const handleCancel = (id: any) => {
        // Implement your cancellation logic here
        console.log(`Canceled appointment with ID: ${id}`);
    };

    const renderAppointment = ({ item } : any) => (
        <View style={styles.card}>
            <Text style={styles.customerName}>{item.customerName}</Text>
            <Text style={styles.serviceName}>{item.serviceName}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <TouchableOpacity 
                style={styles.cancelButton} 
                onPress={() => handleCancel(item.id)}
            >
                <Text style={styles.cancelButtonText}>Cancel Appointment</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Active Appointments</Text>
            <FlatList 
                data={activeAppointments}
                renderItem={renderAppointment}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 15,
        marginVertical: 10,
    },
    customerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    serviceName: {
        fontSize: 16,
        color: '#555',
        marginVertical: 5,
    },
    address: {
        fontSize: 14,
        color: '#777',
        marginBottom: 10,
    },
    cancelButton: {
        backgroundColor: '#FF4C4C',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#ffffff',
        fontWeight: '600',
    },
});

export default ActiveAppointments;
