import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';

const MyAccount = () => {

  const router = useRouter();

  const handleNavigation = (screen: any) => {
    router.push(screen); // Change 'screen' to your desired screen route
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Link href={'/Login'} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Link>
      </View>
      <View style={styles.innerContainer}>
        <Link href={'/Signup'} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Link>
      </View>
    </View>

    // <View style={styles.container1}>
    //   <View style={styles.header}>
    //     <Image
    //       source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your logo URL
    //       style={styles.logo}
    //     />
    //     <Text style={styles.userName}>Mohd Sameer</Text>
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity
    //       style={styles.button1}
    //       onPress={() => handleNavigation('/active-appointments')}
    //     >
    //       <Text style={styles.buttonText1}>Active Appointments</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.button1}
    //       onPress={() => handleNavigation('/closed-appointments')}
    //     >
    //       <Text style={styles.buttonText1}>Closed Appointments</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={styles.button1}
    //       onPress={() => handleNavigation('/history')}
    //     >
    //       <Text style={styles.buttonText1}>History</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
  )
}

const styles = StyleSheet.create({

  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  innerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    textAlign: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container1: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText1: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
})

export default MyAccount