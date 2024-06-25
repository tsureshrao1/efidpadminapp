import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import defaultImg from '/images/gal.jpg';
import AdminHeaderSection from '../../components/header';
import FooterSection from '../../components/footer';

function GridExample() {
    const arr = [
        {
            category: 'Horses',
            bg: 'Primary',
            total: 30
        },
        {
            category: 'Raiders',
            bg: 'Danger',
            total: 40
        },
        {
            category: 'Clubs',
            bg: 'Info',
            total: 10
        },
        {
            category: 'Tournaments',
            bg: 'Warning',
            total: 5
        }
    ]
  return (
    <>
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            gap: '20px'
        }}>
            {arr.map((item) => (
                <Card style={{ width: '24rem' }} bg={item.bg.toLowerCase()}>
                    <Card.Img variant="top" src={defaultImg} />
                    <Card.Body>
                    <Card.Title>No. of {item.category}</Card.Title>
                    <Card.Text>
                        <h5>
                            Count: {item.total}
                        </h5>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    </>
  );
}

export default GridExample;