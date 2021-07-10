import React,{useState} from 'react'

function PostJob() {

    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [skills, setSkills] = useState('');
    const [description, setDescription] = useState('');



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('submitted')
        console.log({title, company, skills, description})
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='content'>
                <label htmlFor='title'>Job Title</label>
                <input placeholder='Job Title' id='title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='content'>
                <label htmlFor='company'>Company Name</label>
                <input placeholder='Company Name' id='company' value={company} onChange={(e) => setCompany(e.target.value)}/>
            </div>
            <div className='content'>
                <label htmlFor='skills'>Skills</label>
                <input placeholder='Required Skills' id='skills' value={skills} onChange={(e) => setSkills(e.target.value)}/>
            </div>
           
            <div className='content'>
                <label htmlFor='description'>Job Description</label>
                <textarea name="description" id="description" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <button >Submit</button>
        </form>
    )
}

export default PostJob