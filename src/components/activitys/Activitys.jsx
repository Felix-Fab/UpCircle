import Activity from '../activity/activity'
import {useEffect} from 'react'
import { SERVER } from '../../config'
import styles from './Activitys.module.css'


const Activitys = () => {
  
    const loadPosts = async () => {
        let response
        let json
        try {
          response = await fetch(`${SERVER}/post`, { method: 'GET'})
          json = await response.json()
          
          let PostsToday = json.data.filter(name => name.includes('J'))
    
          return json.data;
        } catch {
          console.log("[-] Server not reachable!")
          return null;
        }
      }
    
      useEffect(() => {
        let Posts = loadPosts();
    
        console.log(Posts);
    
      }, [])
    
      let ActivitysToday = [
        {
          User:{
            Name: "Emir",
            ProfilPicture: 'https://paramountshop.com/cdn/shop/products/SB-Standees-Spong-1_1200x_49d3e555-4942-4ece-8395-0d806f990bf2.jpg?v=1676174121'
          },
          Activity: 'Pflanze drei Bäume',
          Date: '10:25'
        },
        {
          User:{
            Name: "Noah",
            ProfilPicture: 'https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw'
          },
          Activity: 'Pfandflaschensammler',
          Date: '10:25'
        },
        {
          User:{
            Name: "Felix",
            ProfilPicture: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D192476768W8836H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/profilbild-clone.jpg'
          },
          Activity: 'Recycler',
          Date: '10:25'
        }
      ]
    
      let ActivityYesterday = [
        {
          User:{
            Name: "Emir",
            ProfilPicture: 'https://paramountshop.com/cdn/shop/products/SB-Standees-Spong-1_1200x_49d3e555-4942-4ece-8395-0d806f990bf2.jpg?v=1676174121'
          },
          Activity: 'Pflanze drei Bäume',
          Date: '10:25'
        },
        {
          User:{
            Name: "Noah",
            ProfilPicture: 'https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw'
          },
          Activity: 'Pfandflaschensammler',
          Date: '10:25'
        },
        {
          User:{
            Name: "Felix",
            ProfilPicture: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D192476768W8836H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/profilbild-clone.jpg'
          },
          Activity: 'Recycler',
          Date: '10:25'
        }
      ]

    return(
        <div>
            <div className={styles.Activity}>
            <p className={styles.ActivityTitle}>Heute</p>

            {
                ActivitysToday && ActivitysToday.map((activity, key) => {
                    return (
                    <Activity
                        key={key}
                        name={activity.User.Name}
                        activity={activity.Activity}
                        picture={activity.User.ProfilPicture}
                        date={activity.Date}
                    />
                    )
                })
            }
      </div>

      <div className={styles.Activity}>
        <p className={styles.ActivityTitle}>Gestern</p>

        {
          ActivityYesterday && ActivityYesterday.map((activity, key) => {
            return (
              <Activity
                key={key}
                name={activity.User.Name}
                activity={activity.Activity}
                picture={activity.User.ProfilPicture}
                date={activity.Date}
              />
            )
          })
        }
      </div>
        </div>
    )
}
  
export default Activitys