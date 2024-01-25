import React, {useState} from 'react'
export const BMI = () => {
  
    const [age, setAge] = useState()
    const [weight, setWeight] = useState()
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [msg, setMsg] = useState('')
    
    const reload = ()=>{
      window.location.reload()
    }

    const handleCalculations = (e)=>{
        e.preventDefault ()
        if (!weight || !height || !age) {
            
           
                alert("Pleasee fill all field");
            
          }
        else{
            if (age <18){
                alert("Minimum 18 years old..")
            }
            else{

                let heightinMeter = height / 100
                let bmiFormular = (weight/ (heightinMeter * heightinMeter));
                setBmi(bmiFormular.toFixed(2))
                
                if(bmi < 25){
                    setMsg("You are Underweight")
                }
                
                else if (bmi>=25 || bmi <=30){
                    setMsg("You are Healty")
                }
                
                else {
                    setMsg("You are unhealty, please seek for medication")
                }
            }
            
        }

        

    }

    return (
    <div className='container-bmi'>
        <div className='form-wrapper'>
        <h1 className='tittle'>BMI CALCULATOR</h1>
        <form onSubmit={handleCalculations}>
            <div className='input-wrapper'>
                <label>Age:</label><br/>
                <input type="number" placeholder="Minimun 18 years old.." required value={age} onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className='input-wrapper'>
                <label>Weight:</label><br/>
                <input type="number" placeholder="Weight..." value={weight} onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div className='input-wrapper'>
                <label>Height:</label><br/>
                <input type="number" placeholder="Height..."value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>

            <div className='btn-wrapper'>
                <button className='btn' type="submit">Caluclate</button>
                <button className='btn btn-reload' type="submit" onClick={reload}>Reload</button>
            </div>
            
            <div className='result'>
                <h3>Age: {age}</h3>
                <h3>Your BMI is : {bmi} </h3>
                <p className='p-msg'>{msg}</p>
            </div>
        </form>
        </div>
    </div>
  )
}
export default BMI;
