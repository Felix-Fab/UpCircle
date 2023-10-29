import styles from './Post.module.css'
import { useState } from 'react';
import { WhatsappShareButton } from 'react-share';
import PropTypes from 'prop-types'


const Post = ({name, profilpicture, picture}) => {
    const [like, setLike] = useState(false)

    return(
        <div className={styles.Post}>
            <div className={styles.InfoContainer}>
                <div className={styles.ProfilePictureContainer}>
                    <img className={styles.ProfilePicture} src={`${profilpicture}`}></img>
                </div>
                <div className={styles.User}>{name}</div>
            </div>
            <div className={styles.PictureContainer}>
                <img className={styles.Picture} src={`${picture}`}></img>
            </div>
            <div className={styles.Actions}>
                <span className={`material-icons ${styles.MaterialIcon} ${like ? styles.Liked : ''}`} onClick={() => setLike(!like)}>
                    favorite
                </span>
                <WhatsappShareButton
                title='Hey, schau dir mal diesen UpCircle Community Post an: '
                url='https://upcircle.com/post/atfcl4632'>
                    <span className={`material-icons ${styles.MaterialIcon}`}>
                        share
                    </span>
                </WhatsappShareButton>
            </div>
        </div>
    )
}

Post.propTypes = {
    name: PropTypes.string,
    profilpicture: PropTypes.string,
    picture: PropTypes.string,
    
}
  
export default Post