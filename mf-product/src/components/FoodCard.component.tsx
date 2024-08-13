import React, { CSSProperties } from 'react';

const FoodCard = ({ image, name, description, price }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.description}>{description}</p>
      <p style={styles.price}>${price}</p>
    </div>
  );
};

const styles:{card, image, title, description, price: CSSProperties} = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    width: '250px',
    margin: '20px',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  title: {
    fontSize: '20px',
    margin: '10px 0',
  },
  description: {
    color: '#555',
  },
  price: {
    color: '#e67e22',
    fontWeight: 'bold',
    fontSize: '18px',
  },
};

export default FoodCard;