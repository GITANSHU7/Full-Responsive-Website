import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './Client.css'; //Import here your file style
import Footer from './Footer';

const Client = () => {
  return (
    <div className='App' style={{ marginTop: '2cm' }}>
      <h1 class='animated bounce slow'>Our Clients</h1>
      <MDBContainer class='animated bounce slow'>
        <MDBRow>
          <MDBCol size='4'>
            {' '}
            <img src='/images/info.png' alt='' class='animated bounce slow' />
          </MDBCol>
          <MDBCol size='4'>
            <img src='/images/LT.png' alt='' class='animated bounce slow' />
          </MDBCol>
          <MDBCol size='4'>
            <img src='/images/wipro.jpg' alt='' class='animated bounce slow' />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol sm='4'>
            <img src='/images/TCS.jpg' alt='' class='animated bounce slow' />
          </MDBCol>
          <MDBCol sm='4'>
            <img src='/images/techm.jpg' alt='' class='animated bounce slow' />
          </MDBCol>
          <MDBCol sm='4'>
            <img
              src='/images/Mindtree.png'
              alt=''
              class='animated bounce slow'
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default Client;
