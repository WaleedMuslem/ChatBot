import Card from 'react-bootstrap/Card';
import './Card.css'

export default function BodyOnlyExample(props) {
  return (
      <Card className='card-container'>
        <Card.Body>{props.response}</Card.Body>
      </Card>
  );
}