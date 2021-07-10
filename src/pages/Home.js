import React from 'react'
import { useHistory } from 'react-router-dom';
// import { supabase } from '../Database/Database';

function Home() {
    const history = useHistory()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    return (
        <div>
            <button onClick={() => history.push('./PostJob')}>Job Posting</button>
            <button onClick={() => history.push('./JobApp')}>Job Applicaton</button>
        </div>
    )
}

export default Home
