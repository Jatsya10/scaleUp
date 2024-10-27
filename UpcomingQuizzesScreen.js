import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const UpcomingQuizzesScreen = () => {
  const upcomingQuizzes = [
    { id: '1', name: 'Quiz 1', category: 'Science', date: '10/11/2024', time: '10:00 am' },
    { id: '2', name: 'Quiz 2', category: 'Math', date: '11/11/2024', time: '10:00 am' },
    { id: '3', name: 'Quiz 3', category: 'History', date: '12/11/2024', time: '10:00 am' },
    { id: '4', name: 'Quiz 4', category: 'Geography', date: '13/11/2024', time: '10:00 am' },
    { id: '5', name: 'Quiz 5', category: 'Literature', date: '14/11/2024', time: '10:00 am' },
    { id: '6', name: 'Quiz 6', category: 'Physics', date: '15/11/2024', time: '10:00 am' },
    { id: '7', name: 'Quiz 7', category: 'Chemistry', date: '16/11/2024', time: '10:00 am' },
  ];

  return (
    <View style={styles.container}>
      {upcomingQuizzes.length > 0 ? (
        <FlatList
          data={upcomingQuizzes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.quizItem}>
              <View style={styles.quizHeader}>
                <Image source={require('./assets/reward.png')} style={styles.icon} />
                <View style={styles.quizInfo}>
                  <Text style={styles.quizName}>{item.name}</Text>
                  <Text style={styles.quizCategory}>{item.category}</Text>
                  <Text style={styles.quizDetails}>{item.date} | {item.time}</Text>
                </View>
              </View>
              <View style={styles.rewardContainer}>
                <Image
                  source={require('./assets/gift.png')}
                  style={styles.rewardIcon}
                />
                <Text style={styles.rewardText}>Surprise Rewards for Top 3 Winners</Text>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={styles.noQuizContainer}>
          <Text style={styles.noQuizText}>No Upcoming Quizzes</Text>
          <Text style={styles.noQuizSubText}>You're all set for now! Keep exploring and stay sharp!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  quizItem: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
  },
  quizInfo: {
    flex: 1,
  },
  quizName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  quizCategory: {
    fontSize: 16,
    color: '#888888',
    marginTop: 2,
  },
  quizDetails: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f8e9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  rewardIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  rewardText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  noQuizContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noQuizText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#757575',
  },
  noQuizSubText: {
    fontSize: 16,
    color: '#757575',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default UpcomingQuizzesScreen;
