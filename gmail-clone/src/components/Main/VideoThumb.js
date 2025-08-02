import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const VideoThumb = () => {
  return (
    <div className='video-thumb'>
      <img className='videothumb__thumbnail' src="https://people.com/thmb/nULHMiiBE0uNuR540LQpQ0mEPHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(736x340:738x342)/adam-sandler-happy-gilmore-2-072925-2-bcd277b74d82480e93ce95cf97478a7b.jpg" alt='Thumbnail' />

      <div className='videopthumb__details'>
        <AccountCircleIcon />

        <div className='videothumb__channel'>
            <h1 className='videothumb_title'>
                Watch the brand new video of Adam Sandler
            </h1>
            <div className='videothumb__texts'>
                <p className="videothumb__text"> Adam Sandler </p>
                <p className="videothumb__text"> 123 views . 2 days ago </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VideoThumb
