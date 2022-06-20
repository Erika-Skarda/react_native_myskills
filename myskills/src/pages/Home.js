import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput,
  Platform, 
  FlatList,
  StatusBar
} from 'react-native';
import { Button } from '../components/Button'
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    setMySkills(prevState => [...prevState, newSkill])
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGreeting('Good Morning!')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon!')
    } else {
      setGreeting('Good Night!')
    }
  }, [mySkill]);

  return (
    <View style={styles.container}>
     

      <Text style={styles.title}>
        Welcome, Erika
      </Text>
      
      <Text style={styles.greeting}>
        {greeting}
      </Text>

      <TextInput 
        style={styles.input} 
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard skill={item} />
       )}
      >
      </FlatList>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greeting: {
    color: '#FFF',
  }
})
