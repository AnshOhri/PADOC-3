import React from 'react'

class Signup extends React.Component {        
    render() { 
        return (
            <div className='signup'>
                <div class="status">
                <h1>SignUp</h1>
                <select name="Status" id="Profession">
                    <option value="patient">As a Pateint</option>
                    <option value="doctor">As a Doctor</option>
                </select>
                </div>
                <form>
                    <input type="email" placeholder="Email" />
                    <input type='password' placeholder='Password'></input>
                    <button type="submit" id="signup">SignUp</button>
                </form>
            </div>
        );
    }
}
 
export default Signup;