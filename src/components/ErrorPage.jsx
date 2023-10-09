
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-24'>
            <h1 className='text-4xl'>404!</h1>
            <p className='text-4xl'>Routes not found.</p>
            <Link
            to='/'
            >
                <button className='btn btn-outline mt-6'>Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;