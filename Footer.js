import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
} from 'mdbreact';
import { MDBFooter } from 'mdbreact';
import './App.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <MDBFooter color='black' className='font-small pt-4 mt-4'>
        <MDBContainer fluid className='text-center text-md-left'>
          <MDBRow>
            <MDBCol md='6'>
              <strong>IT CONSULTING</strong>

              <p>
                Increasing your competitive advantage by aligning strategy with
                people and culture. #IT Consulting
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ fontSize: 30, color: 'white' }}
                />
              </p>
            </MDBCol>
            <MDBCol md='6'>
              <h5 className='title'>Links</h5>
              <ul>
                <li className='list-unstyled'>
                  <Link to='/home'>
                    <a href='#!'>Home </a>
                  </Link>{' '}
                </li>

                <li className='list-unstyled'>
                  <Link to='/about'>
                    {' '}
                    <a href='#!'>About</a>
                  </Link>{' '}
                </li>

                <li className='list-unstyled'>
                  {' '}
                  <Link to='/project'>
                    <a href='#!'>Project</a>
                  </Link>{' '}
                </li>

                <li className='list-unstyled'>
                  <Link to='/service'>
                    <a href='#!'>Service</a>
                  </Link>{' '}
                </li>

                <li className='list-unstyled'>
                  <Link to='/client'>
                    <a href='#!'>Client</a>
                  </Link>{' '}
                </li>
                <li className='list-unstyled'>
                  <Link to='/Service'>
                    <a href='#!'>Contact</a>
                  </Link>{' '}
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className='footer-copyright text-center py-3'>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href='https://www.tackleconsulting.net'> itconsulting.net </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      <footer />
    </div>
  );
}

export default Footer;
