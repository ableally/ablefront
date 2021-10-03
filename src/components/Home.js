import AtButton from './shared/Button';
import '../styles/Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {

    return <>
        <h1>Welcome to AbleTest!</h1>
        <Link to="/quiz">
            <AtButton>Next</AtButton>
        </Link>
    </>
}

export default Home;
