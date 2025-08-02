
import './styles.css'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar__buttons'>
            <div className='sidebar__btn sidebar__btn--active'>
                <HomeIcon className='sidebar__icon' />
                <p>Home</p>
            </div>
            <div className='sidebar__btn'>
                <WhatshotIcon className='sidebar__icon' />
                <p>Trending</p>
            </div>
            <div className='sidebar__btn '>
                <SubscriptionsIcon className='sidebar__icon' />
                <p>Subscription</p>
            </div>
        </div>
        <div className='sidebar__buttons bottom'>
            <div className='sidebar__btn '>
                <VideoLibraryIcon className='sidebar__icon' />
                <p>Libraries</p>
            </div>
            <div className='sidebar__btn '>
                <HistoryIcon className='sidebar__icon' />
                <p>History</p>
            </div>
            <div className='sidebar__btn '>
                <OndemandVideoIcon className='sidebar__icon' />
                <p>Your Videos</p>
            </div>
            <div className='sidebar__btn '>
                <WatchLaterIcon className='sidebar__icon' />
                <p>Watch Later</p>
            </div>
            <div className='sidebar__btn '>
                <ThumbUpIcon className='sidebar__icon' />
                <p>Liked Videos</p>
            </div>
            <div className='sidebar__btn '>
                <ExpandMoreIcon className='sidebar__icon' />
                <p>Show More</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
