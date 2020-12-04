import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import classNames from "classnames";
function App() {
  const { register, handleSubmit, errors  } = useForm({
    mode:"onTouched",
  });
  const onSubmit = data => console.log(data);
  console.log(errors)
  
  return (
   
    <div className="container my-5">
      <div className="card shadow mx-auto w-75">
        <div className="card-header">
          <h1>Valaidation</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text"
                className={classNames("form-control", {"is-invalid":errors.fullname})}
                id="fullname"
                placeholder="Enter Your Full Name"
                name="fullname"
                ref={register({
                  required:"this field is required",
                  minLength:{
                    value:4,
                    message:"Please Enter Fullname minimum 4 characters length"
                  }
                })}
              />
              {errors.fullname && (
                <div className="invalid-feedback">
                  {errors.fullname.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className={classNames("form-control", {"is-invalid":errors.email})}
                id="email"
                placeholder="Enter Your E-mail Address"
                name="email"
                ref={register({
                  required:"this field is required",
                  pattern:{
                    value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message:"Please Enter a valid email"
                  }
                })}
              />
                {errors.email && (
                <div className="invalid-feedback">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className={classNames("form-control", {"is-invalid":errors.phone})}
                id="phone"
                placeholder="Enter Your Phone Number"
                name="phone"
                ref={register({
                  required:"this field is required",
                  pattern:{
                    value:/^\d{10}$/,
                    message:"Please Enter a 10 digit phone no"
                  }
                })}
              />
                {errors.phone && (
                <div className="invalid-feedback">
                  {errors.phone.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className={classNames("form-control", {"is-invalid":errors.password})}
                id="password"
                placeholder="Enter Your Password"
                name="password"
                ref={register({
                  required:"this field is required",
                  pattern:{
                    value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message:"Please Enter a valid password"
                  }
                })}
              />
                {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="state">Choose Your State</label>
              <select className={classNames("form-control", {"is-invalid":errors.state})}
              id="state"  name="state"
               ref={register({
                required:"this field is required",
              })}
                >
                <option value="">--- Select Your State ---</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
              {errors.state && (
                <div className="invalid-feedback">
                  {errors.state.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="male"
                  name="gender"
                  ref={register({
                    required:"this field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="male">male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="female"
                  name="gender"
                  ref={register({
                    required:"this field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="female">female</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="other"
                  name="gender"
                  ref={register({
                    required:"this field is required",
                  })}
                />
                <label className="form-check-label" htmlFor="other">other</label>
              </div>
              {errors.gender && (
                <div className="form-text text-danger">
                  {errors.gender.message}
                </div>
              )}
            </div>
            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input"
                type="checkbox" id="tnc"  
                ref={register({
                  required:"this field is required",
                })}
                name="tnc" />
                <label className="form-check-label" htmlFor="tnc"
                >I agree all terms & conditions</label
                >
              </div>
              {errors.tnc && (
                <div className="form-text text-danger">
                  {errors.tnc.message}
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">Create New Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
