import PropTypes from 'prop-types'
import styles from './Challenge.module.css'
import ProgressBar from "@ramonak/react-progress-bar";
import icon_open from '../../assets/chevron.png'
import { useState } from 'react';
import Levy from '../levy/levy'
import { useNavigate } from "react-router-dom";

const Challenge = ({id, description, points, active, progress, goal, levys}) => {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate();

  const cancel = () => {
    console.log('cancel')
    return
  }
  const submit = () => {
    navigate("/Camera", { id: id});
  }

  if (active) {
    return (
      <div className={styles.Challenge}>
        <span onClick={() => setOpen(!open)}>
          <span className={styles.Challenge__btn}>
            <img src={icon_open} alt=">" className={open ? styles.btn__open : styles.btn__closed}/>
          </span>
          <p className={styles.Challenge__points}>+{points} Punkte</p>
          <p className={styles.Challenge__description}>{description}</p>
          <p className={styles.Challenge__progress}>{`${progress}/${goal}`}</p>
          <ProgressBar
            completed={progress}
            maxCompleted={goal}
            baseBgColor='#282828'
            bgColor='#3D8865'
            height='.8rem'
            customLabel={' '}
            labelSize='.6rem'
          />
        </span>

        {open &&
        <div>
          <div className={styles.LevyContainer}>
            <p className={styles.LevyTitle}>Deine Abgaben</p>
            <div className={styles.Levys}>
              {
                levys && levys.map((levy, key) => {
                  return (
                    <Levy
                      key={key}
                      id={levy.Id}
                      picture={levy.Picture}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className={styles.Challenge__actions}>
            <span className={styles.cancel} onClick={() => {cancel()}}>Abbrechen</span>
            <span className={styles.add} onClick={() => {submit()}}>Abgabe hinzugügen</span>
          </div>
        </div>
        }
    </div>
    )
  }
  
  return (
    <div className={styles.Challenge}>
      <p className={styles.Challenge__points}>+{points} Punkte</p>
      <p className={styles.Challenge__description}>{description}</p>
    </div>
  )
}

Challenge.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  points: PropTypes.number,
  active: PropTypes.bool,
  progress: PropTypes.number,
  goal: PropTypes.number,
  levys: PropTypes.array
}

export default Challenge