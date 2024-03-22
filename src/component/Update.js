import { Children, useEffect,useState } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Pop from './Pop';
// import { Dialog, DialogContent } from '@material-ui/core';
// import { DialogTitle } from '@mui/material';


function Update() {

const {id}=useParams();
const [data, setData] = useState([]);
const[Children,OpenPopup,setOpenPopup,onClick]=useState(false)


    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        MobNo: "",
      });

      const Navigate=useNavigate();

      useEffect(()=>{
        axios.get(`http://localhost:3000/Student/${id}`)
        .then(res=>setInputData(res.data))
       
        .catch(err=>console.log(err))
      },[])
      
      const handleSubmit = (event) => {
        // event.preventDefault();
        axios.put(`http://localhost:3000/Student/${id}`,{
          name:inputData.name,
          email:inputData.email,
          MobNo:inputData.MobNo
        })//update data here
        .then(res=>{
         alert("Data update Succefully !")
         Navigate("/")
        }).catch(error=>{
          console.log(error)
        })
      }
  return (
    
    <div>
            <section class="vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    {/* <form class="mx-1 mx-md-4"> */}
                    <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control" value={inputData.name}
                            onChange={(e) => setInputData({ ...inputData,name: e.target.value,  })
                            }
                          />
                         
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control" value={inputData.email}
                            onChange={(e) => setInputData({...inputData,email: e.target.value, })}
                          />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c">
                        MobNo
                          </label>
                          <input
                            type="MobNo"
                            id="form3Example4c"
                            class="form-control" value={inputData.MobNo}  onChange={(e) => setInputData({...inputData,MobNo: e.target.value, }) }
                          />
                        </div>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg" onClick={()=>handleSubmit()}>
                        Update
                        </button>
                      </div>
                      {/* <div>
                        <button type="button" class="btn btn-primary btn-lg"onClick={()=>setOpenPopup}>Update
                         
                        </button>
                      </div> */}
            
    
                    {/* </form> */}
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
    </section>
    
</div>

  )
}

export default Update;
