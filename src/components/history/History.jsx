import PropTypes from 'prop-types'
import styles from './History.module.css'

const History = ({date, time, points, activity}) => {
  
    return (
        <div className={styles.History}>
            <div>
                <div className={styles.Timestamp}>
                    <p className={styles.Date}>{date}</p>
                    <p>&nbsp; - &nbsp;</p>
                    <p className={styles.Time}>{time}</p>
                </div>
                <div className={styles.Activity}>
                    <p>{activity}</p>
                </div>
            </div>
            <div className={styles.PointsContainer}>
                <p>+{points}P</p>
            </div>
        </div>
    );
}

History.propTypes = {
  date: PropTypes.string,
  time: PropTypes.string,
  points: PropTypes.number,
  activity: PropTypes.string
  
}

export default History