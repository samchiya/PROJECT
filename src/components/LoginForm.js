

  import './Sign.css'
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted!");
        navigate('/Dashboard');
    }

    const goToLogin = () => {
        navigate('/Login');
    }

    return (
        <div className='main'>
            <form onSubmit={handleSubmit}>
                {/* <div className='form-group'>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" required />
                </div> */}

                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>

                {/* <div className='form-group'>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input type="password" id="repeat-password" name="repeat-password" required />
                </div> */}

                {/* <div className='form-group'>
                    <span>Gender</span>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div> */}

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

            {/* <div>
                <button onClick={goToLogin}>Go to Login</button>
            </div> */}
        </div>
    );
}
// export default LoginForm;