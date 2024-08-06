import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './home.css';
import { UserStatistics } from './userStatistics';
import { EventStatistics } from './EventStatistics';
import { HorseStatistics } from './HorseStatistics';
import { RiderStatistics } from './RiderStatistics';
function GridExample() {
  return (
    <>
        <h3 className='mt-4'>
            Welcome to EFI Admin Portal!
        </h3>
        <Row className='home-root-cont'>
            <Col className='home-item-cont' xs={12} md={6}>
                <div className='home-inner-cont'>
                    <div className='h-title'>
                        Users
                    </div>
                    <UserStatistics />
                </div>
            </Col>
            <Col className='home-item-cont' xs={12} md={6}>
                <div className='home-inner-cont'>
                    <div className='h-title'>
                        Events
                    </div>
                    <EventStatistics />
                </div>
            </Col>
            <Col className='home-item-cont' xs={12} md={6}>
                <div className='home-inner-cont'>
                    <div className='h-title'>
                        Riders
                    </div>
                    <RiderStatistics />
                </div>
            </Col>
            <Col className='home-item-cont' xs={12} md={6}>
                <div className='home-inner-cont'>
                    <div className='h-title'>
                        Horses
                    </div>
                    <HorseStatistics />
                </div>
            </Col>
        </Row>
    </>
  );
}

export default GridExample;