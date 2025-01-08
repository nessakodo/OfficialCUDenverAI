import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import icon from './images/club-rxCX8m8Y.png';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center p-4 border-bottom'>
        <div className='d-flex justify-content-center'>
            <a href='https://facebook.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
            </a>
            <a href='https://twitter.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
            </a>
            <a href='https://linkedin.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
            </a>
            <a href='https://github.com' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
            </a>
        </div>
        </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img
                            src= {icon} // Relative path from public folder
                            alt="AI Club Icon"
                            style={{ width: '50px', height: '50px' }} // Customize size
                />
                AI Club
              </h6>
              <p>
              The AI Student Association at CU Denver is a student-led organization dedicated to exploring the applications of artificial intelligence, data science, and machine learning. We provide a collaborative platform for students to connect, engage, and grow through hands-on projects, coding challenges, and research initiatives.
              </p>
            </MDBCol>



            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                University Of Colorado Denver, Engineering - Computer Science, 1201 Larimer St, Denver, CO 80204
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                aisa@ucdenver.edu
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +1 234 567 890
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +1 234 567 891
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Proudly affiliated with the University of Colorado Denver. ©  {new Date().getFullYear()} AI Student Association at CU Denver. All rights reserved.
      </div>
    </MDBFooter>
  );
}