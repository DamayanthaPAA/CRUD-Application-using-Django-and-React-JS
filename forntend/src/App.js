import React ,{useState , useEffect} from "react"
import axios from "axios"; 
import './main.css'

const App = () => {
    const [studnts , setStudents] = useState([])
    const [newStudent , setNewStudent] = useState({
            "first_name": "",
            "last_name": "",
            "age": "",
            "gender": "",
            "address": "",
            "contact_number": "",
            "gread": ""
        })
    const [SelectedStudents , setSelectedStudents] = useState(null)
    const [toView , setToView] = useState({
            "first_name": "",
            "last_name": "",
            "age": "",
            "gender": "",
            "address": "",
            "contact_number": "",
            "gread": ""
        })
    const [openView , setOpenView] = useState(false);
    
    useEffect(() => {
        fetchSudent()
    }, [])

    const fetchSudent = () => {
        axios.get('http://127.0.0.1:8000/api/students/')
        .then(response => {
            console.log(response.data)
            setStudents(response.data)
        })
        .catch(error => console.error(error))
        
    }

    const handleInpitChange = (e) => {
        setNewStudent ({...newStudent,[e.target.name]:e.target.value})
        console.log(newStudent)
    }
    const handleAddStudent = () => {
        axios.post ('http://127.0.0.1:8000/api/students/', newStudent)
        .then(response => {
            setStudents([...studnts, response.data])
            setNewStudent({
                "first_name": "",
                "last_name": "",
                "age": "",
                "gender": "",
                "address": "",
                "contact_number": "",
                "gread": ""
                }
            )
        }).catch(error => console.error(error))
    }
    const handleViewClick = async(id) => {
        const response = await axios.get('http://127.0.0.1:8000/api/students/${id}/')
        setToView(response.data)
        setOpenView(true)
    }
    // const handleInpitChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewStudent((newStudent) => ({
    //       ...newStudent,
    //       [e.target.name]: e.target.value,
    //     }));
    //   };
    return(
        // <h1>App</h1>
        <div className="app-container">
            <h1>Student Managment System</h1>
            {/* form Container */}
            <div className="form-container">
                <div className="form-inputs">
                    <input type="text" name="first_name" placeholder="first name" value={newStudent.first_name} onChange={handleInpitChange}></input>
                    <input type="text" name="last_name" placeholder="last name" value=
                    {newStudent.last_name} onChange={handleInpitChange}></input>
                    <input type="text" name="age" placeholder="age" value=
                    {newStudent.age} onChange={handleInpitChange}></input>
                    <input type="text" name="gender" placeholder="gender" value=
                    {newStudent.gender} onChange={handleInpitChange}></input>
                    <textarea   name="address" placeholder="address" value=
                    {newStudent.address} onChange={handleInpitChange}/> 
                    <input type="text" name="contact_number" placeholder="contact number" value=
                    {newStudent.contact_number} onChange={handleInpitChange}></input>
                    <input type="text" name="gread" placeholder="gread" value=
                    {newStudent.gread} onChange={handleInpitChange}></input>

                    <div className="form-buttons">
                        {
                            SelectedStudents ? (
                                <>
                                    <button>Update</button>
                                    <button>Cancel</button>
                                </>
                            ) : (
                                <button onClick={handleAddStudent}>Add New Student</button>
                            )
                        }
                    </div>
                    
                </div>
            </div>
            {/* Stdent List */}
            <ul className="student-list">
                {
                    studnts.map(studnts =>(
                        <li key={studnts.id}>
                            <div>
                                <strong>{studnts.first_name} {studnts.last_name}</strong>
                            </div>
                            <div className="actions">
                                <button className="view">View</button>
                                <button className="edit">Edit</button>
                                <button className="delete">Delete</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App