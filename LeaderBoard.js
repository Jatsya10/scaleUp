import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LeaderBoard = () => {
  const topThreeToday = [
    { id: '1', name: 'Hannah Taylor', points: 2000, rank: 1, image: require('./assets/p6.png') },
    { id: '2', name: 'John Doe', points: 1800, rank: 2, image: require('./assets/p7.jpg') },
    { id: '3', name: 'William Butcher', points: 1600, rank: 3, image: require('./assets/s1.jpeg') },
  ];
  
  const otherUsersToday = [
    { id: '4', name: 'Chris Rock', designation: 'Team Leader', points: 1500, rank: 4, image: require('./assets/s2.jpeg') },
    { id: '5', name: 'Charlie Brown', designation: 'Developer', points: 1400, rank: 5, image: require('./assets/p3.png') },
    { id: '6', name: 'Kevin Williams', designation: 'Designer', points: 1300, rank: 6, image: require('./assets/p5.jpg') },
  ];
  
  const topThreeWeekly = [
    { id: '1', name: 'Sam Wilson', points: 3000, rank: 1, image: require('./assets/s3.jpeg') },
    { id: '2', name: 'Sameer Patil', points: 2800, rank: 2, image: require('./assets/s4.jpeg') },
    { id: '3', name: 'Anvi Gupta', points: 2600, rank: 3, image: require('./assets/s5.jpeg') },
  ];
  
  const otherUsersWeekly = [
    { id: '4', name: 'Mike Clarke', designation: 'Project Manager', points: 2500, rank: 4, image: require('./assets/p4.png') },
    { id: '5', name: 'Jane Doe', designation: 'Data Analyst', points: 2400, rank: 5, image: require('./assets/p1.png') },
    { id: '6', name: 'Miles Morales', designation: 'Software Engineer', points: 2300, rank: 6, image: require('./assets/s6.jpeg') },
  ];
  
  const topThreeAllTime = [
    { id: '1', name: 'Leo Messi', points: 5000, rank: 1, image: require('./assets/s7.jpeg') },
    { id: '2', name: 'Alice Smith', points: 4800, rank: 2, image: require('./assets/p2.png') },
    { id: '3', name: 'Meet Vanja', points: 4600, rank: 3, image: require('./assets/meet.png') },
  ];
  
  const otherUsersAllTime = [
    { id: '4', name: 'Olajide Olatunji', designation: 'Consultant', points: 4500, rank: 4, image: require('./assets/s9.jpeg') },
    { id: '5', name: 'Peter Quill', designation: 'Analyst', points: 4400, rank: 5, image: require('./assets/s10.jpeg') },
    { id: '6', name: 'Deshank Singh', designation: 'Architect', points: 4300, rank: 6, image: require('./assets/deshank.png') },
  ];
  

  const [activeTab, setActiveTab] = useState('today');
  const [displayedUsers, setDisplayedUsers] = useState(otherUsersToday);
  const [topThree, setTopThree] = useState(topThreeToday);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'today') {
      setDisplayedUsers(otherUsersToday);
      setTopThree(topThreeToday);
    } else if (tab === 'weekly') {
      setDisplayedUsers(otherUsersWeekly);
      setTopThree(topThreeWeekly);
    } else if (tab === 'allTime') {
      setDisplayedUsers(otherUsersAllTime);
      setTopThree(topThreeAllTime);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabChange('today')}>
          <Text style={[styles.tabText, activeTab === 'today' && styles.activeTabText]}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('weekly')}>
          <Text style={[styles.tabText, activeTab === 'weekly' && styles.activeTabText]}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('allTime')}>
          <Text style={[styles.tabText, activeTab === 'allTime' && styles.activeTabText]}>All Time</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.podiumContainer}>
        {topThree.map((user, index) => (
          <View key={user.id} style={[styles.podiumItem, styles[`podium${index + 1}`]]}>
            <Image source={user.image} style={styles.userImage} />
            <Text style={styles.rankBadge}>{user.rank}</Text>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userPoints}>{user.points} Points</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={displayedUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.otherUserContainer}>
            <Text style={styles.rankText}>{item.rank}</Text>
            <Image source={item.image} style={styles.smallUserImage} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userDesignation}>{item.designation}</Text>
            </View>
            <Text style={styles.userPoints}>{item.points} Points</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#F0E68C',
    borderRadius: 20,
    marginBottom: 20,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  activeTabText: {
    color: '#FFA500',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  podiumContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  podiumItem: {
    alignItems: 'center',
    padding: 10,
    width: '30%',
  },
  podium1: {
    marginTop: 0,
  },
  podium2: {
    marginTop: 20,
  },
  podium3: {
    marginTop: 40,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  rankBadge: {
    backgroundColor: '#FFD700',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 4,
    borderRadius: 12,
    textAlign: 'center',
    position: 'absolute',
    top: -10,
    left: '40%',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  userPoints: {
    fontSize: 14,
    color: '#777',
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  rankText: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'center',
    color: '#333',
  },
  smallUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userDesignation: {
    fontSize: 12,
    color: '#777',
  },
});

export default LeaderBoard;
