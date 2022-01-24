import './NotFound.css';

import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='NotFound'>
            <h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to='/'>
                <button>
                    Go Back To Home
                </button>
            </Link>
        </div>
    );
}
