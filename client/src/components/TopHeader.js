import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import dugup from '../images/dugup.jpeg'
import Navbar from './Navbar';

//to make picture circular 
const imageStyle = {
    width: '100px',  // Adjust to your desired size
    height: '100px', // Adjust to your desired size
    borderRadius: '50%', // Makes the image circular
    overflow: 'hidden', // Clips the image within the circular boundary
  };
  
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Maintains aspect ratio and covers the circular area
  };


const TopHeader = (props) => (
<div>
  <div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={imageStyle}>
            <Image
            style={imgStyle}
            size='small'
            src={dugup}
            />
         </div>
    </div>
</div>
    
    <Navbar changePage={props.changePage}></Navbar>

    </div>
)
// public/images/roads.jpeg/Users/nguyena6/kotlin/kotlin/client/public/images/roads.jpeg
export default TopHeader