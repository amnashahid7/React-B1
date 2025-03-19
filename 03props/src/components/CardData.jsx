import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardData({ title = "Samsung" }) {
    console.log(title);

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}



