import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const users = [
  {
    id: '1',
    name: 'Jatsya Jariwala',
    designation: 'App Developer',
    tagline: 'Connecting ideas with execution',
    email: 'jatsyajariwala29@gmail.com',
    location: 'Mumbai',
    photoUrl: require('./assets/jj.png'),
    dateOfBirth: '29 May, 2005',
    gender: 'Male',
    highestPoints: '2500',
    interest: 'Coding, Hiking, Maths',
    hobby: 'Cricket, TT, Football',
  },
  // Additional users can be added here if needed
];

const UserProfile = ({ user }) => {
  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFoundText}>User not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={user.photoUrl} style={styles.userPhoto} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userDesignation}>{user.designation}</Text>
        <Text style={styles.userTagline}>{user.tagline}</Text>
        <View style={styles.divider} />

        {/* Details */}
        {[
          { title: 'Email', value: user.email },
          { title: 'Location', value: user.location },
          { title: 'Date of Birth', value: user.dateOfBirth },
          { title: 'Gender', value: user.gender },
          { title: 'Highest Points', value: user.highestPoints },
          { title: 'Interests', value: user.interest },
          { title: 'Hobbies', value: user.hobby },
        ].map((detail, index) => (
          <View key={index} style={styles.detailsContainer}>
            <Text style={styles.detailTitle}>{detail.title}:</Text>
            <Text style={styles.detailText}>{detail.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function App() {
  return <UserProfile user={users[0]} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C4B6B',
    padding: 16,
  },
  card: {
    backgroundColor: '#b3d5e3',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  userPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#FFE156',
    borderWidth: 3,
    marginBottom: 16,
  },
  userName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  userDesignation: {
    fontSize: 20,
    fontWeight: '500',
    color: '#414447',
    marginBottom: 8,
  },
  userTagline: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#6e7073',
    marginBottom: 12,
  },
  divider: {
    height: 2,
    backgroundColor: '#E6B423',
    width: '80%',
    marginVertical: 16,
    borderRadius: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingVertical: 4,
  },
  detailTitle: {
    fontSize: 18,
    color: '#bf3834',
    fontWeight: '600',
  },
  detailText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '400',
    textAlign: 'right',
  },
  notFoundText: {
    fontSize: 20,
    color: '#D32F2F',
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
