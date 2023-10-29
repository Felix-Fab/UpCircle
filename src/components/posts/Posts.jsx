import styles from './Posts.module.css'
import Post from '../../components/posts/post/Post'


const Posts = () => {
  
    let Posts = [
        {
            Id: 2,
            User:{
                Name: "Noah",
                ProfilPicture: 'https://play-lh.googleusercontent.com/0SAFn-mRhhDjQNYU46ZwA7tz0xmRiQG4ZuZmuwU8lYmqj6zEpnqsee_6QDuhQ4ZofwXj=w240-h480-rw'
            },
            date: "29.10.2023",
            time: '10:25',
            picture: 'https://erni-gartenbau.ch/wp-content/uploads/2020/09/erni-blog-baumpflanzen-september-2020-3.jpg',
            description: 'Description'
        },
        {
            Id: 3,
            User:{
                Name: "Felix",
                ProfilPicture: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D192476768W8836H10000/views/1,width=378,height=378,appearanceId=839,backgroundColor=F2F2F2/profilbild-clone.jpg'
            },
            date: "33.11.2023",
            time: '12:30',
            picture: 'https://wildes-gartenherz.de/wp-content/uploads/2022/04/Raeume-im-Garten-gestalten-1-850x478.jpg',
            description: 'Gutes für die Umwelt getan'
        }
    ]

    return(
        <div className={styles.Posts}>
            <div>
                {
                    Posts && Posts.map((post, key) => {
                        return (
                        <Post
                            key={key}
                            name={post.User.Name}
                            profilpicture={post.User.ProfilPicture}
                            picture={post.picture}
                        />
                        )
                    })
                }
            </div>
            <div className={styles.AddButton}>
                <span className={`material-icons ${styles.MaterialIcon}`}>add_photo_alternate</span>
            </div>
        </div>
    )
}
  
export default Posts