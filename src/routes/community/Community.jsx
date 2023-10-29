import styles from './Community.module.css'
import {useState} from 'react'
import Activitys from '../../components/activitys/activitys'
import { motion } from 'framer-motion'
import Posts from '../../components/posts/Posts'

const Community = () => {
  const [post, setPost] = useState(true)

  if (post) {
    return (
      <motion.div className={styles.Community} initial={{opacity:0}} animate={{opacity: 1}}>
        <h1 className={styles.Title}>Community</h1>

        <div className={styles.SectionSelector}>
          <div className={`${styles.SelectedSelector} ${styles.LeftSelector}`}>Aktivitäten</div>
          <div className={`${styles.Selector} ${styles.RightSelector}`} onClick={() => setPost(false)}>Posts</div>
        </div>

        <Activitys/>
      </motion.div>
    )
  }
  else {
    return (
      <motion.div className={styles.Community} initial={{opacity:0}} animate={{opacity: 1}}>
        <h1 className={styles.Title}>Community</h1>

        <div className={styles.SectionSelector}>
          <div className={`${styles.Selector} ${styles.LeftSelector}`} onClick={() => setPost(true)}>Aktivitäten</div>
          <div className={`${styles.SelectedSelector} ${styles.RightSelector}`}>Posts</div>
        </div>

        <Posts/>
      </motion.div>
    )
  }
}

export default Community