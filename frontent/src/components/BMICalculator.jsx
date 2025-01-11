import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [gender,setGender] = useState("");
  const [bmi, setBmi] = useState("");
  
  const calculateBMI = (e) => {
    e.preventDefault();

    if(!height || !weight || !gender){
      toast.error("Please enter valid Height,Weight and Gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
    
    if(bmiValue < 18.5){
      toast.warning(
        "You are underweight. Consider seeking advice from a healthcare professional."
      );
    }
    else if(bmiValue >= 18.5 && bmiValue < 24.9 ) {
      toast.success(
        "You have normal weight. Keep maintaing a healty lifestyle."
      );
    }
    else if(bmiValue >= 25 && bmiValue < 29.9 ) {
        toast.warning(
          "You have overweight. Take Healthcare Advice."
        );
    }
    else{
      toast.error(
        "You are in the Obese range. It is urgent to seek advice from a healthcare specialist..."
      );
    }
  };

  return (
    <section className="bmi"> 
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (in cm)</label>
              <input 
                type="number"
                value={height} 
                onChange={(e) => setHeight(e.target.value)}
                required
                />
            </div>

            <div>
              <label>Weight (in kg)</label>
              <input 
                type="number"
                value={weight} 
                onChange={(e) => setWeight(e.target.value)}
                required
                />
            </div>
            <div>
              <label>Gender</label>
              <select value={gender} 
              onChange={(e) => setGender(e.target.value)}
              >
                <option value="">select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit'>calculate BMI</button>
          </form>
        </div>
        <div className='wrapper'>
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
