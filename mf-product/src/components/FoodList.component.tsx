import { CSSProperties } from 'react';
import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard.component';

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then(response => response.json())
      .then(data => {
        setFoods(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          image={food.image}
          name={food.name}
          description={food.description}
          price={food.price}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex' as const,
    flexWrap: 'wrap' as const,
    justifyContent: 'center' as const,
  },
};

export default FoodList;