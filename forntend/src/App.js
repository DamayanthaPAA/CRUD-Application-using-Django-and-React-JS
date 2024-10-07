import React ,{useState , useEffect} from "react"
import axios from "axios"; 
import './main.css'

const App = () => {
    const [studnts , setStudents] = useState([])
    const [newStudents , setNewStudents] = useState({
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


    return(
        <h1>App</h1>
    )
}

export default App