import styles from './TakePicture.module.css'
import PropTypes from 'prop-types'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import { useNavigate } from "react-router-dom";

const TakePicture = ({id}) => {
    const navigate = useNavigate();
  
    function handleTakePhoto (dataUri) {
        console.log(dataUri);
        
        navigate('/challenges')
    }

    if(id == null){
        navigate('/challenges');
    }

    return (
        <div className={styles.CameraContainer}>
            <Camera className={styles.Camera} isFullscreen={true}
                onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
            />
        </div>
    );
}

TakePicture.propTypes = {
    id: PropTypes.string,
}
  
export default TakePicture