import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Pop from "./Pop";







function Home () {
  const [data, setData] = useState([]);
  // const[Children,OpenPopup,setOpenPopup,onClick]=useState(false)

 

 
  
  useEffect(() => {
    axios
      .get('http://localhost:3000/Student')
      .then((res) => {
        // console.log(res)
         setData(res.data);
        
      })
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className="container mt-5">
      
      <Link to="/create" className="btn btn-success">
        Create +
      </Link>

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">MobNo</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.MobNo}</td>
              <td>
              {/* to={`/update/${item.id}`} */}
                <Link className="btn btn-success mx-2"  to={`/update/${item.id}`}>
                  Update</Link>
                <Link className="btn btn-danger mx-2"  to={`/delete/${item.id}`}>Delete</Link>
                <Link className="btn btn-primary mx-2"  to={`/read/${item.id}`}>Read</Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Pop OpenPopup={OpenPopup}
     setOpenPopup={setOpenPopup}>
    </Pop> */}

   </div>
    
  );
};

export default Home;
