import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Create() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    MobNo: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    MobNo: false,
  });

  const navigate = useNavigate(); // Navigate back to the home page

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedValidationErrors = { ...validationErrors };

    // Basic validation checks
    if (inputData.name.trim() === "") {
      updatedValidationErrors.name = true;
    } else {
      updatedValidationErrors.name = false;
    }

    if (inputData.email.trim() === "") {
      updatedValidationErrors.email = true;
    } else {
      updatedValidationErrors.email = false;
    }

    if (inputData.MobNo.trim() === "") {
      updatedValidationErrors.MobNo = true;
    } else {
      updatedValidationErrors.MobNo = false;
    }

    // Update validation errors state
    setValidationErrors(updatedValidationErrors);

    // Check if any field is empty
    if (
      inputData.name.trim() === "" ||
      inputData.email.trim() === "" ||
      inputData.MobNo.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Rest of your validation logic...

    // Proceed with Axios POST request if validation passed
    // ...

    axios
      .post('http://localhost:3000/Student', inputData)
      .then(res => {
        console.log(res);
        alert("Data Added Successfully!");
        navigate('/');
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error as needed
      });
  };

  const handleInputChange = (e, field) => {
    setInputData({
      ...inputData,
      [field]: e.target.value,
    });
  };
  return (

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
                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                        <input
                             type="text"
                             id="form3Example1c"
                              className="form-control"
                              onChange={(e) => handleInputChange(e, 'name')}
                          />
                           {validationErrors.name && (
      <div className="invalid-feedback">Required</div>
    )}
                          <label class="form-label" for="form3Example1c">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            class="form-control"
                            required
                            onChange={(e) => handleInputChange(e, 'email')}

                          />
                          <label class="form-label" for="form3Example3c">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="number"
                            id="form3Example4c"
                            class="form-control"
                            required
                            onChange={(e) => handleInputChange(e, 'MobNo')}

                          />
                          <label class="form-label" for="form3Example4c">
                          MobNo
                          </label>
                        </div>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit}>
                           Register
                      </button>

                      </div>
    
                    </form>
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
  );
}
export default Create;
