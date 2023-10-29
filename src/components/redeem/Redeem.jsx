import PropTypes from 'prop-types'
import styles from './Redeem.module.css'

const Redeem = ({name, cost, gift, picture}) => {
  
    return (
      <div className={styles.Redeem}>
        <div className={styles.TitleContainer}>
          <div className={styles.PictureContainer}>
            <img className={styles.Picture} src={`${picture}`}></img>
          </div>
          <p className={styles.Cost}>{cost}&nbsp;P</p>
        </div>
        <div>
          <p className={styles.Description}>{gift} Euro {name} Gutschein</p>
        </div>
    </div>
    )
}

Redeem.propTypes = {
  name: PropTypes.string,
  cost: PropTypes.string,
  gift: PropTypes.string,
  picture: PropTypes.string,
  
}

export default Redeem