import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Dummy data for closed appointments with status
const closedAppointments = [
    {
        id: '1',
        customerName: 'Alice Johnson',
        serviceName: 'Dental Checkup',
        address: '123 Maple St, Springfield',
        status: 'Closed', // Status of the appointment
    },
    {
        id: '2',
        customerName: 'Bob Smith',
        serviceName: 'Haircut',
        address: '456 Oak Ave, Springfield',
        status: 'Closed',
    },
    {
        id: '3',
        customerName: 'Charlie Brown',
        serviceName: 'Massage Therapy',
        address: '789 Pine Rd, Springfield',
        status: 'Closed',
    },
];

const ClosedAppointments = () => {
    const renderAppointment = ({ item }: any) => (
        <View style={styles.card}>
            <Text style={styles.customerName}>{item.customerName}</Text>
            <Text style={styles.serviceName}>{item.serviceName}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.status}>{item.status}</Text> 
            <TouchableOpacity style={styles.disabledButton} disabled>
                <Text style={styles.disabledButtonText}>Closed</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Closed Appointments</Text>
            <FlatList 
                data={closedAppointments}
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
    status: {
        fontSize: 14,
        fontWeight: '600',
        color: '#007BFF', // Color indicating the status
        marginBottom: 10,
    },
    disabledButton: {
        backgroundColor: '#cccccc', // Light gray for disabled
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    disabledButtonText: {
        color: '#ffffff',
        fontWeight: '600',
    },
});

export default ClosedAppointments;
