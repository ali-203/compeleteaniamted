import React,{ useState  } from "react";

const Contact = () => {
      const [data, setData] = useState({
          fullname: "",
          phone: "",
          email: "",
          msg: "",

      });
      const InputEvent = (event) => {
          const { name, value } = event.target;
          setData((preVal) => {
              return {
                  ...preVal,
                  [name]: value,
              };

          });

      };
const formSubmit = (e) => {
e.preventDefault();
alert(
`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`
);
};


return (
    <>
    
<div className="my-5">
    <h1> Contact with US </h1>
</div>
<div className="container contact_div">
    
        <div className="col-md-6 col-10 mx-auto">
        
            <form className="form" onSubmit={formSubmit}>
            
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label"> 
  FullName
   </label>
  <input
   type="text"
    className="form-control"
     id="exampleFormControlInput1"
     name="name"
     value={data.fullname}
     onChange={InputEvent}
      placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">
  Phone
  </label>
  <input
   type="number"
    className="form-control" 
    id="exampleFormControlInput1"
    name="phone"
     value={data.phone}
     onChange={InputEvent}

     placeholder="Phone Number"/>
</div>
<div classNameName="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input
   type="email" 
   className="form-control" 
   id="exampleFormControlInput1"
   name="email"
     value={data.email}
     onChange={InputEvent}


    placeholder="Email"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" 
  className="form-label"> Message </label>
  <textarea
   className="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"
  name="msg"
  value={data.msg}
  onChange={InputEvent}
  
  
  >

  </textarea>
</div><div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  
</form>
        </div>
    </div>


    </>


);


};

export default Contact;