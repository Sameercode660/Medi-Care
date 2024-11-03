import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image
} from 'react-native';


export default function ImageSlider() {
    return (
        <ScrollView horizontal={true} style={styles.scrollViewStyle}>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={styles.container}
            ></Image>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={styles.container}
            ></Image>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={styles.container}
            ></Image>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        width: '100%'
    },
    container: {
        width: 320,
        height: 180,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        marginTop: 10
    }
})
