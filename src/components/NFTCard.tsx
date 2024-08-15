import React from 'react';
import ReactDOM from 'react-dom/client';
//Components
import './NFTCard.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, ListGroup, Image } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgMain from '../images/image-equilibrium.jpg';
import ImgIco1 from '../images/icon-ethereum.svg';
import ImgIco2 from '../images/icon-clock.svg';
import ImgAvatar from '../images/image-avatar.png';

interface linesProp {
    head: string;
    par: string;
    item_1: string;
    item_2: string;
    sign: string;
    link: string;
}

const NFTCard = () => {
    const linesProp: linesProp = {
        head: 'Equilibrium #3429',
        par: 'Our Equilibrium collection promotes balance and calm.',
        item_1: '0.041 ETH',
        item_2: '3 days left',
        sign: 'Creation of',
        link: 'Jules Wyvern'
    }

    AOS.init();

    return (
        <Container fluid className='min-vh-100 cs-bg-1 d-flex flex-column justify-content-center align-items-center'>
            <Card data-aos="fade-down" data-aos-duration="4000" className='cs-bg-2 rounded-3 border-0 cs-w p-4'>
                <span className='cs-img'>
                    <Card.Img variant='top' src={ImgMain} className='rounded-3' alt='main image' />
                </span>
                <Card.Body className='px-0'>
                    <Card.Link className='cs-link cs-fw-600 fs-4'>{linesProp.head}</Card.Link>
                    <Card.Text className='cs-tc-1 cs-fw-300'>{linesProp.par}</Card.Text>
                </Card.Body>
                <ListGroup horizontal className='w-100'>
                    <ListGroup.Item 
                        className='w-50 p-0 bg-transparent border-0 cs-tc-2 d-flex flex-row align-items-center justify-content-start'>
                            <Image fluid src={ImgIco1} alt='ethereum' className='me-2' />{linesProp.item_1}
                    </ListGroup.Item>
                    <ListGroup.Item 
                        className='w-50 p-0 bg-transparent border-0 text-end cs-tc-1 d-flex flex-row align-items-center justify-content-end'>
                            <Image src={ImgIco2} alt='clock' className='me-2' />{linesProp.item_2}
                    </ListGroup.Item>
                </ListGroup>
                <Card.Footer className='px-0 cs-bt mt-3 pt-3 d-flex flex-row align-items-center justify-content-start cs-tc-1'>
                    <Image fluid src={ImgAvatar} alt='avatar' roundedCircle className='border cs-w-2 me-2' />
                    {linesProp.sign}
                    <Card.Link className='cs-link ms-1'>{linesProp.link}</Card.Link>
                </Card.Footer>
            </Card>
        </Container>
    );
}

export default NFTCard;