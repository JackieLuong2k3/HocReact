import { Button } from 'react-bootstrap';
import videoHomepage from '../assets/video-homepage.mp4'

const Home = () => {
    return (
        <div>
            <div>
                <video  autoPlay muted loop>
                    <source src={videoHomepage} type="video/mp4" />
                </video>
            </div>
            <div className='text1'>
                <h2>A sticky element toggles between relative and fixed.</h2>
                <h6 className='title-2'>I wanna know that what we do everyday for? and where are our future go? </h6>
                <Button className='btn btn-dark'>Get it</Button>
            </div>            
            <div className='text2'>
                aaaaa
            </div>
        </div>
    )
}
export default Home;