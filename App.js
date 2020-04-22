import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Service from './Service';
import Client from './Client';
import { Link } from 'react-router-dom';
import Home from './Home';

import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from 'mdbreact';
import { MDBIcon } from 'mdbreact';

import { MDBBtn } from 'mdbreact';
import { MDBFooter } from 'mdbreact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />

        <switch>
          <Route path='/' exact component={Homes} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/project' component={Project} />
          <Route path='/service' component={Service} />
          <Route path='/client' component={Client} />
          <Route path='/contact' component={Contact} />
        </switch>
      </div>
    </Router>
  );
}
const Homes = () => (
  <div>
    <img src='/images/TEMP.png' alt='' class='image1' />
    <Jumbotron fluid>
      <Container fluid>
        <h2 className='display-3'>Hiring the right talent always</h2>
        <p className='lead' class='animated jackInTheBox Delay'>
          <h4>
            Hiring isn't about some abstract notion of better talent. It's not
            about hiring everyone you can, either. It's about connecting with
            people who fit. Increasing your competitive advantage by aligning
            strategy with people and culture.
          </h4>{' '}
          <h3> #IT Consulting</h3>{' '}
        </p>
      </Container>
    </Jumbotron>

    <img src='/images/industry.jpg' alt='left' class='image2' />
    <Jumbotron fluid>
      <Container>
        <img src='/images/hero.png' alt='' class='image3' />
      </Container>
    </Jumbotron>
    <div className='container'>
      <Jumbotron
        class='rat1'
        style={{
          backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
        }}
      >
        <h1>Telecommunication</h1>
        <p class='animated bounceInUp delay-3s'>
          The Internet of Things (IoT) is the network of physical devices,
          vehicles, home appliances, and other items embedded with electronics,
          software, sensors, actuators, and connectivity which enables these
          things to connect and exchange data, creating opportunities for more
          direct integration of the physical world into computer-based systems,
          resulting in efficiency improvements, economic benefits, and reduced
          human exertions.
        </p>
        <p>
          <Button variant='primary'>
            Why import {} from "module"; Technologies
          </Button>
        </p>
      </Jumbotron>
    </div>
    <p class='MAT'>
      <h3>
        <u> TEAM MEMBERS</u>
      </h3>
    </p>
    <div className='container'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/cfo.jfif'
            alt='First slide'
            className='image5'
          />
          <Carousel.Caption>
            <p>
              <strong>
                <u>NELSON RAJ(CEO)</u>
              </strong>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/pro1.jpg'
            alt='Third slide'
            className='image6'
          />

          <Carousel.Caption>
            <p>
              <strong>
                <u>JORDEN(CTO)</u>
              </strong>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/pro4.jfif'
            alt='Third slide'
            className='image7'
          />

          <Carousel.Caption>
            <p>
              <strong>
                <u>ROBERY RAY(MARKETING HEAD)</u>
              </strong>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <Jumbotron className='piche'></Jumbotron>
    <p className='quotes'>#LEADER QUOTES</p>
    <div className='container'>
      <CardDeck>
        <Card>
          <Card.Img variant='top' src='./images/bill.jfif' className='card1' />
          <Card.Body>
            <Card.Title>Bill Gates</Card.Title>
            <Card.Text>
              It's fine to celebrate success but it is more important to heed
              the lessons of failure.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='./images/pro7.jfif' className='card2' />
          <Card.Body>
            <Card.Title>Robert Dave</Card.Title>
            <Card.Text>
              If your actions inspire others to dream more, learn more, do more
              and become more, you are a leader.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant='top' src='./images/elon.jfif' className='card3' />
          <Card.Body>
            <Card.Title>Elon Musk</Card.Title>
            <Card.Text>
              When something is important enough, you do it even if the odds are
              not in your favor
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className='text-black text-center py-5 px-4 my-5'
              style={{
                backgroundImage: `url(https://wallpapercave.com/wp/ThAOKju.jpg)`,
              }}
            >
              <MDBCol className='py-5'>
                <MDBCardTitle className='h1-responsive pt-3 m-5 font-bold'>
                  Medical devices
                </MDBCardTitle>
                <p className='mx-5 mb-5'>
                  We understand the importance of the medical device industry.
                  The health and well-being of the public is at stake - and it
                  requires the right minds to make the right contributions to
                  your success. Tackle has demonstrated service excellence and
                  partnership with medical device MSP programs over an extended
                  period of time in all capacities of temporary, temporary to
                  permanent and permanent positions.
                </p>
                <Link to='/home'>
                  <MDBBtn
                    outline
                    color='blue'
                    className='mb-5'
                    className='animated zoomIn infinite '
                  >
                    <MDBIcon icon='clone' className='mr-2'></MDBIcon>
                    Why IT Technologies?
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol
              className='text-black text-center py-5 px-4 my-5'
              style={{
                backgroundImage: `url(https://www.outlookindia.com/outlookmoney/public/uploads/article/gallery/38d9affd650492adbb3cb0d29daa771c.jpg)`,
              }}
            >
              <MDBCol className='py-5'>
                <MDBCardTitle className='h1-responsive pt-3 m-5 font-bold'>
                  Insurance
                </MDBCardTitle>
                <p className='mx-5 mb-5'>
                  The insurance industry is a minefield of heavily regulated,
                  intrinsically complicated products and services. It’s not a
                  profession that takes kindly to the uninitiated and decades of
                  experience are often needed where another field requires far
                  less. The very same applies to insurance recruiting and an
                  agency must be aware of both the industry’s needs, and
                  difficulty that exists in sourcing the very best candidates.
                </p>
                <Link to='/home'>
                  <MDBBtn
                    outline
                    color='blue'
                    className='mb-5'
                    className='animated zoomIn infinite 
                     '
                  >
                    <MDBIcon icon='clone' className=' mr-2'></MDBIcon> Why IT
                    Technologies?
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <Link to='/contact'>
      <button className='iska' class='btn btn-primary'>
        {' '}
        Goto Contact
      </button>
    </Link>

    <Footer />
  </div>
);

export default App;
