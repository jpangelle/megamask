import React, {useState, useEffect} from 'react';
import './Existing.css';

export default function Existing() {
    const [recoveryProcess, setRecoveryProcess] = useState('')


    

    return (
        <div className="existing-page">
            <div >
                <select 
                className="recovery-dropdown" 
                name="existing account"
               >
                    <option value="Select a Recovery" selected disabled >Select a Recovery Process</option>
                    <option  value="Seed Phrase">Seed Phrase</option>
                    <option value="Private Key">Private Key</option>
                </select>
            </div>
        </div>
    )
}
