import './App.css';
import React, { useState } from "react";
import Alert from './myComponets/Alert';

function App() {
  const [upper, setupper] = useState('');

  const [alert, setalert] = useState(null);


  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }



  const handleupercase = () => {
    let newupper = upper.toUpperCase();
    setupper(newupper);
    showalert(" Your text is upper case ", "success :");
  }

  const handlelowercase = () => {
    let newupper = upper.toLocaleLowerCase();
    setupper(newupper);
    showalert(" Your text is lower case ", "success :");

  }

  // const handleextraspaceremove = () => {
  //   let newupper = upper.split(/[ ]+/);
  //   setupper(newupper.replace(""));
  //   showalert(" your text is remove extra space ","success :");

  // }

  // const handleextraspaceremove = () => {
  //   let newupper = upper.split(/[ ]+/);
  //   // setupper(newupper.replace(""));
  //   showalert(" Your text is remove extra space ", "success :");

  // }

  const handlecopy = () => {
    (upper.value === "" ? showalert("please enter your text ", "denger :") : showalert(" your text is copied! ", "success :"));

    var newupper = document.getElementById('validationTextarea');
    newupper.select();
    //  newupper.setSelectionRange(0,9999);
    navigator.clipboard.writeText(newupper.value)


  }

  const handlecline = () => {
    setupper('');
    showalert(" Your text is clean", "success :");

  }

  const handleonchang = (event) => {
    setupper(event.target.value);
  }

  const handleeror = () => {
    showalert(" Enter a text", "danger :");
  }



  return (
    <>
      <div className="my-5">

        <h1 className='text-center'>text-utility</h1>
        <div className="my-5 mx-5">
          <textarea value={upper} onChange={handleonchang} className="form-control " id="validationTextarea" placeholder="Enter a text" required></textarea>
          <button onClick={upper.length > 0 ? handleupercase : handleeror} type="button" className="btn btn-primary my-3 mx-3"> to upper case </button>
          <button onClick={upper.length > 0 ? handlelowercase : handleeror} type="button" className="btn btn-primary my-3 mx-3"> to lower case </button>
          <button onClick={upper.length > 0 ? handlecopy : handleeror} type="button" className={`btn btn-primary my-3 mx-3`} > copy</button>
          <button onClick={upper.length > 0 ? handlecline : handleeror} type="button" className="btn btn-primary my-3 mx-3 "> clean</button>
          {/* <button onClick={handleextraspaceremove} type="button" className="btn btn-primary my-3 mx-3 "> remove extra space</button> */}


        </div>

      </div>
      <Alert alert={alert} />

    </>
  );
}

export default App;
