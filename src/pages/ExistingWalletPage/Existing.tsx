import React, { useState, useEffect } from "react";
import "./Existing.css";

export default function Existing() {
  const [recoveryProcess, setRecoveryProcess] = useState<string | undefined>();


  useEffect(() => {
    setRecoveryProcess(undefined)
  }, [])


    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setRecoveryProcess(event.target.value)
    }
    
    console.log(recoveryProcess)


  return (
    <div className="existing-page">
      <div className="dropdown-section">
  
        <select onChange={handleSelect} value={recoveryProcess} className="recovery-dropdown">
          <option value="Select a Recovery Process" selected disabled>Select a Recovery Process</option>
          <option  value="Seed Phrase">Seed Phrase</option>
          <option   value="Private Key">Private Key</option>
        </select>
  
      </div>
     {recoveryProcess === "Seed Phrase" ? (
    <div className="recovery-text">
      <textarea className="recovery-text"></textarea>
    </div> 
      ) : ( 
      <div className="recovery-key">
      <input className="recovery-key"></input>
      </div>
      )
    }
    </div>
  );
}
