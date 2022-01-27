import './NotFound.css';

import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='NotFound'>
            <h1>404 Not Found</h1>           
            <Link to='/'>
                <button>
                    Go Back To Home
                </button>
            </Link>
        </div>
    );
}
