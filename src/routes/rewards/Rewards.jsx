import { motion } from 'framer-motion'
import {useEffect, useState} from 'react'
import styles from './Rewards.module.css'
import History from '../../components/history/History'
import Redeem from '../../components/redeem/Redeem'
import { SERVER } from '../../config'

const Rewards = () => {
  const [expand, setExpand] = useState(false)

  const loadChallenges = async () => {

    let response
    let json
    try {
      response = await fetch(`${SERVER}/post`, { method: 'GET'})
      json = await response.json()
      console.log(json)
    } catch {
      console.log("[-] Server not reachable!")
      return null;
    }
  }

  const loadExpandedChallenges = async() => {
    let response
    let json
    try {
      response = await fetch(`${SERVER}/post`, { method: 'GET'})
      json = await response.json()
      console.log(json)
    } catch {
      console.log("[-] Server not reachable!")
      return null;
    }
  }

  useEffect(() => {
    expand ? loadExpandedChallenges : loadChallenges()
  });

  let ScoreHistory = [
    {
      Date: '23.10.2023',
      Time: '10:28',
      Points: 15,
      Activity: 'Pfandflaschensammler'
    },
    {
      Date: '23.10.2023',
      Time: '10:28',
      Points: 15,
      Activity: 'Pfandflaschensammler'
    },
    {
      Date: '23.10.2023',
      Time: '10:28',
      Points: 15,
      Activity: 'Pfandflaschensammler'
    }
  ]

  if(expand){
    ScoreHistory.push(
      {
        Date: '23.10.2023',
        Time: '10:28',
        Points: 15,
        Activity: 'Pfandflaschensammler'
      },
    );

    ScoreHistory.push(
      {
        Date: '23.10.2023',
        Time: '10:28',
        Points: 15,
        Activity: 'Pfandflaschensammler'
      },
    )
    
    ScoreHistory.push(
      {
        Date: '23.10.2023',
        Time: '10:28',
        Points: 15,
        Activity: 'Pfandflaschensammler'
      },
    )
  }

  return (
    <motion.div className={styles.Rewards} initial={{opacity:0}} animate={{opacity: 1}}>
      <h1 className={styles.Title}>Rewards</h1>
      <div className={styles.ScoreContainer}>
        <div>
          <p className={styles.ScoreTitle}>Dein Punktestand</p>
          <p className={styles.Counter}>200</p>

          {
          ScoreHistory && ScoreHistory.map((history, key) => {
            return (
              <History
                key={key}
                date={history.Date}
                time={history.Time}
                points={history.Points}
                activity={history.Activity}
              />
            )
          })
        }
        <div className={styles.CounterExpand}>
          <span className={`material-symbols-outlined ${styles.MaterialIcon}`} onClick={() => setExpand(!expand)}>
            {
              expand ? 'expand_less' : 'expand_more'
            }
          </span>
        </div>
        </div>
      </div>

      <h1 className={styles.Title2}>Punkte einlösen</h1>
      <div className={styles.RedeemContainer}>
        <div className={styles.RedeemLine}>
          <Redeem
            name="Amazon"
            cost="1500"
            gift="15"
            picture="https://i.pinimg.com/736x/a1/49/93/a14993dc2b627797779f9c1b1cfab808.jpg"
          />
          <Redeem
            name="Media Markt"
            cost="1000"
            gift="10"
            picture="https://cdn-1.webcatalog.io/catalog/mediamarkt-it/mediamarkt-it-icon-filled-256.png?v=1695104995061"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Rewards