import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const HELLO_WORLD_QUERY = `
  query {
    hello
  }
`;

async function fetchGraphQL() {
    try {
      const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: HELLO_WORLD_QUERY }),
      });
  
      const { data } = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
  export function HelloWorld() {
    const [hello, setHello] = useState('');
  
    useEffect(() => {
      async function fetchData() {
        const { hello } = await fetchGraphQL();
        setHello(hello);
      }
  
      fetchData();
    }, []);
  
    return <Text>{hello}</Text>;
  }
  