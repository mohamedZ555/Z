import { useState } from 'react';
import './Login.css';



function Login() {
    const [values, setValues] = useState({
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        Gender: "",
        Birthday: "",
    });

    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setTasks((prev) => [...prev, values]); 
        setValues({ 
            FirstName: "",
            LastName: "",
            PhoneNumber: "",
            Email: "",
            Gender: "",
            Birthday: "",
        });
    };

    return (
        <div className='main'>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor='FirstName'>First Name</label>
                <input type='text' placeholder='Enter Your First Name' name='FirstName' value={values.FirstName} onChange={handleChange} />

                <label htmlFor='LastName'>Last Name</label>
                <input type='text' placeholder='Enter Your Last Name' name='LastName' value={values.LastName} onChange={handleChange} />

                <label htmlFor='PhoneNumber'>Phone Number</label>
                <input type='text' placeholder='Phone Number' name='PhoneNumber' value={values.PhoneNumber} onChange={handleChange} />

                <label htmlFor='Email'>Email</label>
                <input type='email' placeholder='Enter Your Email' name='Email' value={values.Email} onChange={handleChange} />

                <label>Gender</label>
                <input type='radio' name='Gender' value='Male' onChange={handleChange} /> Male
                <input type='radio' name='Gender' value='Female' onChange={handleChange} /> Female
                <input type='radio' name='Gender' value='Other' onChange={handleChange} /> Other

                <label htmlFor='Birthday'>Birthday</label>
                <input type='date' name='Birthday' value={values.Birthday} onChange={handleChange} />

                <button type='button' onClick={() => setValues({ ...values, FirstName: "", LastName: "", PhoneNumber: "", Email: "", Gender: "", Birthday: "" })}>
                    Reset
                </button>
                <button type='submit'>Submit</button>
            </form>

            <div>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <p>{task.FirstName} {task.LastName}</p>
                        <p>{task.PhoneNumber}</p>
                        <p>{task.Email}</p>
                        <p>{task.Gender}</p>
                        <p>{task.Birthday}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Login;
