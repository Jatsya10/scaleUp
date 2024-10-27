import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const QuizMainScreen = ({ navigation }) => {
  const worldRanking = 20;
  const pointsEarned = 12000;
  const lastQuizTitle = 'UI/UX Design';
  const lastQuizPoints = 150;
  const lastQuizRank = 1;

  return (
    <ScrollView style={styles.quizContainer}>
      {/* World Ranking and Points Earned */}
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Image source={require('./assets/reward.png')} style={styles.icon} />
          <Text style={styles.statText}>{worldRanking}</Text>
          <Text style={styles.statLabel}>World Ranking</Text>
        </View>
        <View style={styles.stat}>
          <Image source={require('./assets/favourites.png')} style={styles.icon} />
          <Text style={styles.statText}>{pointsEarned}</Text>
          <Text style={styles.statLabel}>Points Earned</Text>
        </View>
      </View>

      {/* Last Quiz Result */}
      <View style={styles.lastQuizContainer}>
        <Text style={styles.lastQuizTitle}>LAST QUIZ</Text>
        <Text style={styles.quizDetails}>{lastQuizTitle}</Text>
        <Text style={styles.quizDetails1}>Points: {lastQuizPoints}</Text>
        <Icon name="trophy" size={30} color="#FFD700" />
        <Text style={styles.quizDetails1}>Rank: {lastQuizRank}</Text>
      </View>

      {/* Featured Section */}
      <View style={styles.featuredContainer}>
        <Text style={styles.featuredTitle}>FEATURED</Text>
        <Text style={styles.featuredText}>Amazing Quizzes lined up for you all in</Text>
        <Text style={styles.featuredText}>Upcoming Months</Text>
        <Text style={styles.featuredText1}>Stay Tuned..!</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationButtonText}>Turn on Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* View All Quizzes Button */}
      <TouchableOpacity style={styles.viewQuizzesButton}>
        <Text style={styles.viewQuizzesText}>View All Quizzes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  quizContainer: { 
    padding: 20, 
    backgroundColor: '#FFF8E1', 
    flex: 1 
  },
  statsContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20, 
    backgroundColor: '#004D66', 
    borderRadius: 10,
    padding: 15,
    elevation: 5,
  },
  stat: { 
    alignItems: 'center' 
  },
  icon: { 
    width: 40, 
    height: 40, 
    marginBottom: 5 
  },
  statText: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    color: '#000' 
  },
  statLabel: { 
    fontSize: 14, 
    color: '#FFF', 
    textAlign: 'center' 
  },
  lastQuizContainer: { 
    backgroundColor: '#FFB74D', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 20, 
    elevation: 5,
    alignItems: 'center'
  },
  lastQuizTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#000000', 
    marginBottom: 10
  },
  quizDetails: { 
    fontSize: 24, 
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  quizDetails1: { 
    fontSize: 14, 
    color: '#FFF',
    textAlign: 'center'
  },
  featuredContainer: { 
    backgroundColor: '#004D66', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 20, 
    elevation: 5,
    alignItems: 'center'
  },
  featuredTitle: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#FFB74D', 
    marginBottom: 10
  },
  featuredText: { 
    fontSize: 16, 
    color: '#FFF', 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  featuredText1: { 
    fontSize: 16, 
    color: '#FFF', 
    textAlign: 'center' 
  },
  notificationButton: {
    marginTop: 10,
    backgroundColor: '#FFC107',
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  notificationButtonText: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  viewQuizzesButton: { 
    backgroundColor: '#FFB74D', 
    padding: 15, 
    borderRadius: 10, 
    alignItems: 'center', 
    elevation: 5 
  },
  viewQuizzesText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#FFF' 
  },
});

export default QuizMainScreen;
