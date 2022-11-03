import react from 'react'
import Ggsignin from './firebse';

class Signup extends react.Component {        
    render() { 
        return (
            <>
            <div className='signup'>
                <div class="status">
                <h1>SignUp</h1>
                <select name="Status" id="Profession">
                    <option value="patient">As a Pateint</option>
                    <option value="doctor">As a Doctor</option>
                </select>
                </div>
                <form>
                    <input type="email" placeholder="email" />
                    <button type="submit" id="signup">SignUp</button>
                </form>
            </div>
            <div class="login">
                <button id="google" onClick={Ggsignin}>SignIn with Google</button>
            </div>
            </>
        );
    }
}
 
export default Signup;