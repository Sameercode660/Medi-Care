import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Appointment = () => {
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const [formattedTime, setFormattedTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const handleAppointmentSubmission = () => {
    if (name && email && mobile && address && selectedService && formattedDate && formattedTime) {
      const data = {
        name,
        email,
        mobile,
        address,
        selectedService,
        date: formattedDate,
        time: formattedTime,
      };
      console.log(data);
      Alert.alert('Success', 'Appointment submitted successfully!');
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    const formatted = currentDate.toLocaleDateString();
    setFormattedDate(formatted);
  };

  const onTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
    const formatted = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setFormattedTime(formatted);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const showTimepicker = () => {
    setShowTimePicker(true);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Book Your Appointment</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={(text) => setName(text)} // Corrected event handler
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(text) => setEmail(text)} // Corrected event handler
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your Mobile"
            placeholderTextColor="#888"
            value={mobile}
            onChangeText={(text) => setMobile(text)} // Corrected event handler
            keyboardType="numeric"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your Address"
            placeholderTextColor="#888"
            value={address}
            onChangeText={(text) => setAddress(text)} // Corrected event handler
          />

          <Picker
            selectedValue={selectedService}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedService(itemValue)}
          >
            <Picker.Item label="Select a service" value="" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="py" />
            <Picker.Item label="Java" value="java" />
          </Picker>

          <TouchableOpacity onPress={showDatepicker}>
            <TextInput
              placeholder="Select Date"
              value={formattedDate}
              editable={false}
              style={styles.input}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={showTimepicker}>
            <TextInput
              placeholder="Select Time"
              value={formattedTime}
              editable={false}
              style={styles.input}
            />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onDateChange}
            />
          )}

          {showTimePicker && (
            <DateTimePicker
              value={time}
              mode="time"
              display="default"
              onChange={onTimeChange}
            />
          )}

          <TouchableOpacity style={styles.button} onPress={handleAppointmentSubmission}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  picker: {
    width: '80%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
