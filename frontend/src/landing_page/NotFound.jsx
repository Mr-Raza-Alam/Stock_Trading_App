import {Link} from 'react-router-dom';

function NotFound() {
    return (          
     <>
      <div className="container p-5">
        <div className="row text-center">
          <h1 className='fs-1 mt-5'>404-Not Found Error</h1>
          <p className='fs-4 mx-5'>We couldn’t find the page you were looking for. <Link to="/">Visit Zerodha’s home page.</Link></p>
        </div>
      </div>
     </>
    );
}

export default NotFound;
