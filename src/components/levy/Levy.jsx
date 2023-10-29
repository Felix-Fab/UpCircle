import PropTypes from 'prop-types'
import styles from './Levy.module.css'

const Levy = ({id ,picture}) => {
  
    return (
        <div className={styles.Levy}>
            <img className={styles.Picture} src={`${picture}`}></img>
        </div>
    );
}

Levy.propTypes = {
  id: PropTypes.string,
  picture: PropTypes.string,
}

export default Levy