import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Criminal } from '../../../types/Criminal';
import './MostWantedCard.module.css'

export const MostWantedCard: React.FC = () => {
  const [wantedList, setWantedList] = useState<Criminal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Agregamos paginacion

  useEffect(() => {
    const fetchWantedList = async () => {
      try {
        // Aquí usas la URL de la API del FBI para obtener los criminales más buscados
        const response = await axios.get('https://api.fbi.gov/wanted/v1/list');
        setWantedList(response.data.items);
      } catch (error : any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWantedList();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  
  
  
  return (
    <Container style={{marginTop: "20px"}}>
      <Row xs={1} md={2} lg={4} className="g-4">
        {wantedList.map((criminal) => (
          <Col key={criminal.id}>
            <Card>
              <Card.Img
                variant="top"
                src={criminal.images?.[0]?.original || 'placeholder.jpg'} // Asegúrate de tener una imagen predeterminada
                alt={criminal.title || 'Wanted Person'}
              />
              <Card.Body>
                <Card.Title>
                  <FaUserAlt /> {criminal.title}
                </Card.Title>
                <Card.Text>
                  <strong>Nacionality:</strong> {criminal.nationality || 'Unknown'}
                </Card.Text>
                <Card.Text>
                  <strong>Sex:</strong> {criminal.sex || 'No available'}
                </Card.Text>
                <Card.Text>
                  <strong>Charges:</strong> {criminal.charges || 'No charges available'}
                </Card.Text>
                <Card.Text>
                  <strong>Reward:</strong> {criminal.reward || 'No reward available'}
                </Card.Text>
                <Card.Text>
                  <strong>Details:</strong> {criminal.description || 'No description available'}
                </Card.Text>
                <Button href={criminal.url} target="_blank" rel="noopener noreferrer" className='btn' style={{backgroundColor: "#2e2a5b", border: "none", cursor: "pointer", }}>
                  Learn More
                </Button>
                <Button href={criminal.files?.url} target="_blank" rel="noopener noreferrer" className='btn' style={{marginLeft:"10px", backgroundColor: "#3e4d65 ", border: "none", cursor: "pointer", }}>
                  Download Poster
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
