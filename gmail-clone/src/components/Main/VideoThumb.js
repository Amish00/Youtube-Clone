import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './styles.css';
import { useNavigate} from "react-router-dom";

const VideoThumb = () => {
  const navigate = useNavigate();
  const handleThumbLink = () => navigate("/watch");


  return (
    <div className='videothumb'>
      <img onClick={handleThumbLink} className='videothumb__thumbnail' src="https://people.com/thmb/nULHMiiBE0uNuR540LQpQ0mEPHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(736x340:738x342)/adam-sandler-happy-gilmore-2-072925-2-bcd277b74d82480e93ce95cf97478a7b.jpg" alt='Thumbnail' />

      <div className='videothumb__details'>
        <AccountCircleIcon />

        <div className='videothumb__channel'>
            <h3 className='videothumb__title'> Watch the brand new video of Adam Sandler</h3>

            <div className='videothumb__texts'>
                <p className="videothumb__text"> Adam Sandler </p>
                <p className="videothumb__text">
                  <p>23 views . 2 days ago</p>
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoThumb
