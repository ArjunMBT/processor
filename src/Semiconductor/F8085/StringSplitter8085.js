import React, { useState } from 'react';
import {upper,lower} from "../F8085/functions/Fun80851"

function StringSplitter8085() {
  const [inputString, setInputString] = useState('');
  const [stringArray, setStringArray] = useState([]);
 const solution=[];
  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleSplitString = () => {
    const separatedString =    inputString.split(';');
    
    setStringArray(separatedString);//
   
    for(var i=0;i<stringArray.length;i++)
    {
    if(stringArray[i]=="upper")
     {
      var c= upper();
      solution.push(c);
     }
     else
     {
     alert("not match found");
     }
    }
    alert(solution);
  };


  // {stringArray.map((part, index) => (
  //   <li key={index}>{part}</li>
  // ))}
  return (
    <div>
      <textarea 
      style={{width: '92%',height: '63vh',padding:'20px' , background:'transparent', color:'white'}}   
       type="text" value={inputString} onChange={handleInputChange} />
       <br></br>
      
      <button className='search-button Mainproblembutton'  onClick={handleSplitString}>Run 8085</button>
      
      <ul>
      
      </ul>
    </div>
  );
}

export default StringSplitter8085;
