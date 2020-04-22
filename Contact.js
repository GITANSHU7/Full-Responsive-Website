import React from 'react';
import './Contact.css';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
} from 'mdbreact';
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='App'>
      <div style={{ paddingLeft: '12cm', marginTop: '2cm' }}>
        <MDBContainer>
          <MDBRow>
            <MDBCol md='6'>
              <MDBCard>
                <MDBCardBody>
                  <MDBCardHeader className='form-header warm-flame-gradient rounded'>
                    <h3 className='my-3'>
                      <MDBIcon icon='lock' />
                      Contact:
                    </h3>
                  </MDBCardHeader>
                  <div className='grey-text'>
                    <MDBInput
                      label='Your name'
                      icon='user'
                      group
                      type='text'
                      validate
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      label='Your email'
                      icon='envelope'
                      group
                      type='email'
                      validate
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      label='Subject'
                      icon='tag'
                      group
                      type='text'
                      validate
                      error='wrong'
                      success='right'
                    />
                    <MDBInput
                      type='textarea'
                      rows='2'
                      label='Your message'
                      icon='pencil-alt'
                    />
                  </div>
                  <div className='text-center'>
                    <MDBBtn outline color='secondary'>
                      Send
                      <MDBIcon far icon='paper-plane' className='ml-1' />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
