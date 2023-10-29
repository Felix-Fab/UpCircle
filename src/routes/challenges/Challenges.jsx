import {useState, useEffect} from 'react'
import styles from './Challenges.module.css'
import Challenge from "../../components/challenge/Challenge"
import { motion } from 'framer-motion'
import { SERVER } from '../../config'

const Challenges = () => {
  const [loadingActive, setLoadingActive] = useState(true)
  const [loadingAvailable, setLoadingAvailable] = useState(true)

  const [activeChallenges, setActiveChallenges] = useState([]);
  const [availableChallenges, setAvailableChallenges] = useState([]);

  const loadActiveChallenges = async () => {
    /*try {
      const response = await fetch(`${SERVER}/challenges`)
      const json = await response.json()
      setActiveChallenges(json.data.challenges)
    }
    catch (e) {
      console.error(e)
      setLoadingActive(false)
      return null;
    }

    setLoadingActive(false)*/

    setActiveChallenges(
      [
        {
          "name": "Test",
          "description": "Test123",
          "goal": 10,
          "points": 15,
          "levys": [
            {
              Id: '1',
              Picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgrVuKhv1q2NCWEqTpBXD7eNeCy-S1JPd6w&usqp=CAU'
            },
            {
              Id: '2',
              Picture: 'https://ga.de/imgs/93/1/0/6/1/4/5/6/4/7/tok_849417372d1fc0d2e6a66b63e3b9341f/w714_h1200_x356_y600_Quandt_2021_Pool-507e1963a09a5286.jpg'
            }
          ]
        }
      ]
    )
  }

  const loadAvailableChallenges = async () => {

    try {
      const response = await fetch(`${SERVER}/challenges`)
      const json = await response.json()
      setAvailableChallenges(json.data.challenges)
    }
    catch (e) {
      console.error(e)
      setLoadingAvailable(false)
      return null;
    }

    setLoadingAvailable(false)
  }

  useEffect(() => {
    loadActiveChallenges();
    loadAvailableChallenges();
  }, [])

  return (
    <motion.div className={styles.Challenges} initial={{opacity:0}} animate={{opacity: 1}}>
      <div className={styles.TitleContainer}>
        <div className={styles.Challenges__headline}>
          <h3>Herzlich Willkommen</h3>
          <h2>Aaron Levi Can</h2>
        </div>
        <div className={styles.ProfilPictureContainer}>
          <img className={styles.ProfilPicture} src={`https://images.bravo.de/das-verrat-dein-profilbild-uber-dich-selfie/1x1,id=e8f96e08,b=bravo,w=1600,h=,ca=0,0,100,100,rm=sk.jpeg`}/>
        </div>
      </div>

      <div className={styles.Challenges__active}>
        <p>Aktive Challenges</p>
        { loadingActive && <p>Challenges werden geladen...</p> }
        {
          activeChallenges && activeChallenges.map((challenge, key) => {
            return (
              <Challenge
                key={key}
                name={challenge.name}
                description={challenge.description}
                points={challenge.points}
                progress={challenge.points}
                goal={challenge.goal}
                levys={challenge.levys}
                active={true}
              />
            )
          })
        }
      </div>

      <div className={styles.Challenges__available}>
        <p>Verfügbare Challenges</p>
        { loadingAvailable && <p>Challenges werden geladen...</p> }
        {
          availableChallenges && availableChallenges.map((challenge, key) => {
            return (
              <Challenge
                key={key}
                name={challenge.name}
                description={challenge.description}
                points={challenge.points}
                goal={challenge.progressGoal}
                active={false}
              />
            )
          })
        }
      </div>
    </motion.div>
  )
}

export default Challenges