import styles from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();
  let rewIconStyle = styles.MaterialIcons;
  let comIconStyle = styles.MaterialIcons;
  let chaIconStyle = styles.MaterialIcons;

  let rewTextStyle = styles.ActionTitle;
  let comTextStyle = styles.ActionTitle;
  let chaTextStyle = styles.ActionTitle;

  if (location.pathname === '/rewards') {
    rewIconStyle = styles.MaterialIconsActive
    rewTextStyle = styles.ActionTitleActive;
  }
  else if (location.pathname === '/challenges') {
    chaIconStyle = styles.MaterialIconsActive
    chaTextStyle = styles.ActionTitleActive;
  }
  else if (location.pathname === '/' ){
    comIconStyle = styles.MaterialIconsActive
    comTextStyle = styles.ActionTitleActive;
  }

  return (
    <div className={`${styles.Navbar} ${styles.sticky}`}>
      <Link to='challenges'>
        <div className={`${styles.Action}`}>
          <span className={`material-symbols-outlined ${chaIconStyle} `}>
            ads_click
          </span>
          <p className={chaTextStyle}>Challenges</p>
        </div>
      </Link>

      <Link to='/'>
        <div className={styles.Action}>
            <span className={`material-symbols-outlined  ${comIconStyle}`}>groups</span>
            <p className={comTextStyle}>Community</p>
        </div>
      </Link>

      <Link to='rewards'>
        <div className={`${styles.Action}`}>
          <span className={`material-symbols-outlined ${rewIconStyle}`}>
            star
          </span>
          <p className={rewTextStyle}>Rewards</p>
        </div>
      </Link>
    </div>
  )
}

export default Navbar