import styles from './Activity.module.css'
import PropTypes from 'prop-types'

const Activity = ({name, activity, picture, date}) => {
  
    return (
        <div className={styles.Activity}>
            <div className={styles.PictureContainer}>
                <img className={styles.Picture} src={`${picture}`}></img>
            </div>
            <div className={styles.InfoContainer}>
                <div>
                    <p className={styles.Name}>{name}</p>
                    <p className={styles.Description}>hat die Challenge &apos;{activity}&apos; abgeschlossen. </p>
                </div>
                <div>
                    <p className={styles.Date}>{date}</p>
                </div>
            </div>
        </div>
    );
}

Activity.propTypes = {
    name: PropTypes.string,
    activity: PropTypes.string,
    picture: PropTypes.string,
    date: PropTypes.string
}
  
export default Activity