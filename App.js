import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useSWR from "swr";
import { cache } from "swr"



export default function App() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('https://60310457081a010017546b82.mockapi.io/test', fetcher)
  if (error) return <Text>failed to load</Text>
  if (!data) return <Text>loading...</Text>

  function logout() {
    cache.clear()
    alert("logged out")
  }
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logout}></Button>
      <Text>{JSON.stringify(data)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
