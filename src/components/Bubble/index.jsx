import './index.css';
import photo from './profile.jpg'

const Bubble = () => {

  return (
    <section className="photo-bubble">
        <img src={photo} className="photo-box" alt='image'/>
      </section>
  )
}

export default Bubble;