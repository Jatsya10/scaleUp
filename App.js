import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

// Sample data for announcements and posts
const announcementsData = [
  { id: '1', name: 'John Doe', image: require('./assets/p7.jpg') },
  { id: '2', name: 'Jane Doe', image: require('./assets/p1.png') },
  { id: '3', name: 'Alice Smith', image: require('./assets/p2.png') },
  { id: '4', name: 'Charlie Brown', image: require('./assets/p3.png') },
  { id: '5', name: 'Hannah Taylor', image: require('./assets/p6.png') },
  { id: '6', name: 'Kevin Williams', image: require('./assets/p5.jpg') },
  { id: '7', name: 'Mike Clarke', image: require('./assets/p4.png') },
];

const postsData = [
  { id: '1', name: 'John Doe', image: require('./assets/p7.jpg'), text: 'Lorem ipsum dolor sit amet...', tags: ['Design'] },
  { id: '2', name: 'Jane Doe', image: require('./assets/p1.png'), text: 'Lorem ipsum dolor sit amet...', tags: ['Design', 'User Flow'] },
  { id: '3', name: 'Alice Smith', image: require('./assets/p2.png'), text: 'Lorem ipsum dolor sit amet...', tags: ['Design', 'Persona', 'User Flow'] },
  { id: '4', name: 'Charlie Brown', image: require('./assets/p3.png'), text: 'Lorem ipsum dolor sit amet...', tags: ['Persona', 'User Flow'] },
  { id: '5', name: 'Hannah Taylor', image: require('./assets/p6.png'), text: 'Lorem ipsum dolor sit amet...', tags: ['Design', 'Persona'] },
  { id: '6', name: 'Kevin Williams', image: require('./assets/p5.jpg'), text: 'Lorem ipsum dolor sit amet...', tags: ['User Flow'] },
  { id: '7', name: 'Mike Clarke', image: require('./assets/p4.png'), text: 'Lorem ipsum dolor sit amet...', tags: ['Persona'] },
];

export default function App() {
  const scrollViewRef = useRef(null); 
  const [showLogin, setShowLogin] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const hardcodedUsername = 'john doe';
  const hardcodedPassword = '12345';

  const handleNext = (index) => {
    if (scrollViewRef.current) {
      if (index === 4) {
        setShowLogin(true); 
      } else {
        scrollViewRef.current.scrollTo({ x: width * index, animated: true });
      }
    }
  };

  const handleLogin = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      Alert.alert('Login Successful', 'Welcome to the app!');
      setIsLoggedIn(true); // Mark as logged in
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password');
    }
  };

  return isLoggedIn ? (
    <MainScreen /> // Show main screen after login
  ) : showLogin ? (
    <View style={styles.loginScreen}>
      <Image
        source={require("./assets/scaleUp.png")} 
        style={styles.loginImage}
      />
      <Text style={styles.loginTitle}>Welcome Back!</Text>
      <Text style={styles.loginSubtitle}>Unlock Focused, Distraction-free Learning</Text>
      <Text style={styles.loginSubtitle}>Login now</Text>
      
      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Username/Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername} 
        />
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} 
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.socialLogin}>
        <Text style={styles.loginSubtitle}>Or continue with</Text>
        <View style={styles.socialIcons}>
          <Icon name="google" size={30} />
          <Icon name="apple" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  ) : (
    <ScrollView 
      horizontal 
      pagingEnabled 
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      ref={scrollViewRef}
    >
      <View style={styles.screen}>
        <Image source={require("./assets/image1.png")} style={styles.image1} />
        <Text style={styles.title}>Welcome to ScaleUp!</Text>
        <Text style={styles.description}>Your journey to focused, distraction-free learning starts here. Discover a platform to enhance your knowledge and keep you engaged.</Text>
        <TouchableOpacity onPress={() => handleNext(1)}>
          <Icon name="arrow-circle-right" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <Image source={require("./assets/image2.png")} style={styles.image1} />
        <Text style={styles.title}>Personalized Learning Paths</Text>
        <Text style={styles.description}>Set your goals and receive tailored course recommendations. We curate content just to help you stay motivated and achieve your objectives.</Text>
        <TouchableOpacity onPress={() => handleNext(2)}>
          <Icon name="arrow-circle-right" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <Image source={require("./assets/image3.png")} style={styles.image1} />
        <Text style={styles.title}>Interactive & Engaging Features</Text>
        <Text style={styles.description}>Dive into a variety of interactive modules, quizzes, and community discussions. We make learning fun and interactive, ensuring you to stay on track. </Text>
        <TouchableOpacity onPress={() => handleNext(3)}>
          <Icon name="arrow-circle-right" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.screen}>
        <Image source={require("./assets/image4.png")} style={styles.image1} />
        <Text style={styles.title}>Track Your Progress</Text>
        <Text style={styles.description}>Use our analytics tools to monitor your learning journey, get detailed feedback, insights, celebrate your achievements and identify areas for improvement.</Text>
        <TouchableOpacity onPress={() => handleNext(4)}>
          <Icon name="arrow-circle-right" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const MainScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Announcements Section */}
      <Text style={styles.announcementTitle}>Announcements</Text>
      <FlatList
        horizontal
        data={announcementsData}
        renderItem={({ item }) => (
          <View style={styles.announcementItem}>
            {/* Display image in announcements */}
            <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image 
            }
            style={styles.announcementImage} />
            <Text style={styles.announcementName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      
      {/* Posts Section */}
      <Text style={styles.postTitle}>Post</Text>
      <FlatList
        data={postsData}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            {/* Display image in posts */}
            <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image 
            }
            style={styles.postImage} /> 
            <Text>{item.name}</Text>
            <Text>{item.text}</Text>
            <View style={styles.tagContainer}>
              {item.tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
              ))}
            </View>
            <View style={styles.postIcons}>
              <Icon name="thumbs-up" size={20} />
              <Icon name="comments" size={20} />
              <Icon name="share" size={20} />
              <Icon name="bookmark" size={20} />
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Icon name="home" size={30} />
        <Icon name="search" size={30} />
        <Icon name="plus-circle" size={30} />
        <Icon name="book" size={30} />
        <Icon name="user" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: { flex: 1 },
  screen: { width, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFD700', padding: 20 },
  image: { width: 150, height: 150, marginBottom: 30 },
  image1: { width: 300, height: 300, marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10, textAlign: 'center' },
  description: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 20 },
  loginScreen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#2C5364' },
  loginImage: { width: 150, height: 150, marginBottom: 30, borderRadius: 75 },
  loginTitle: { fontSize: 28, fontWeight: 'bold', color: '#F0F8FF', marginBottom: 5 },
  loginSubtitle: { fontSize: 16, color: '#E0FFF7', textAlign: 'center', marginBottom: 20 },
  inputSection: { width: '80%', marginBottom: 20 },
  inputLabel: { fontSize: 14, color: '#FF6F61', marginBottom: 5 },
  inputField: { padding: 10, borderColor: '#FFDAB9', color: '#FA8072',borderWidth: 1, borderRadius: 5, marginBottom: 15 },
  loginButton: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 5, alignItems: 'center' },
  loginButtonText: { color: '#F0F8FF', fontWeight: 'bold' },
  socialLogin: { alignItems: 'center', marginTop: 20 },
  socialIcons: { flexDirection: 'row', justifyContent: 'space-between', width: 100, marginLeft: 10 },
  mainContainer: { flex: 1, padding: 10, backgroundColor: '#FFFFF0' },
  announcementTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  announcementItem: { marginRight: 10, alignItems: 'center' },
  announcementName: { fontSize: 10, fontWeight: 'bold', color: '#333', marginTop: 1, textAlign: 'center'},
  announcementImage: { width: 100, height: 100, borderRadius: 10 },
  postTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 5 },
  postItem: { padding: 10, backgroundColor: '#FAD4C0', marginBottom: 10, borderRadius: 5 },
  tagContainer: { flexDirection: 'row', marginTop: 5 },
  tag: { fontSize: 12, backgroundColor: '#ddd', padding: 5, borderRadius: 5, marginRight: 5 },
  postIcons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
    announcementImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    postImage: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
      marginBottom: 10,
    }
});