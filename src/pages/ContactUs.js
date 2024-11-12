import React, { useState } from 'react';

function CaesarCipherPage() {
  const [userInput, setUserInput] = useState('');
  const [shift, setShift] = useState(0);
  const [cipherText, setCipherText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [cipherInput, setCipherInput] = useState('');
  const [decryptShift, setDecryptShift] = useState(0);

  const handleEncryption = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') {
      alert('Please enter some text to encrypt.');
      return;
    }

    const shiftedText = userInput.split('').map((char) => {
      if (/[a-z]/i.test(char)) {
        const base = char.charCodeAt(0) >= 97 ? 97 : 65; // Lowercase or uppercase base
        return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
      }
      return char;
    }).join('');

    setCipherText(shiftedText);
  };

  const handleDecryption = (e) => {
    e.preventDefault();
    if (cipherInput.trim() === '') {
      alert('Please enter some text to decrypt.');
      return;
    }

    const unshiftedText = cipherInput.split('').map((char) => {
      if (/[a-z]/i.test(char)) {
        const base = char.charCodeAt(0) >= 97 ? 97 : 65; // Lowercase or uppercase base
        return String.fromCharCode(((char.charCodeAt(0) - base - decryptShift + 26) % 26) + base);
      }
      return char;
    }).join('');

    setDecryptedText(unshiftedText);
  };

  return (
    <>
      <div className='container'>
        <div className='col-flex'>
          <div className='text-overlay intro-header text-primary'>
            Caesar Cipher Encryption and Decryption
          </div>

          {/* Encryption Section */}
          <div className='input-section'>
            <h3>Encrypt a Message</h3>
            <form onSubmit={handleEncryption} className='form-style'>
              <input
                type='text'
                placeholder='Enter your message to encrypt'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className='input-field'
              />
              <input
                type='number'
                placeholder='Enter shift value'
                value={shift}
                onChange={(e) => setShift(Number(e.target.value))}
                className='input-field'
              />
              <button type='submit' className='submit-button'>
                Encrypt Message
              </button>
            </form>
          </div>

          {/* Output Section for Encryption */}
          {cipherText && (
            <div className='output-section'>
              <div className='output-box'>
                <h3>Encrypted Cipher Text</h3>
                <p>{cipherText}</p>
              </div>
            </div>
          )}

          {/* Decryption Section */}
          <div className='input-section'>
            <h3>Decrypt a Cipher Text</h3>
            <form onSubmit={handleDecryption} className='form-style'>
              <input
                type='text'
                placeholder='Enter the cipher text'
                value={cipherInput}
                onChange={(e) => setCipherInput(e.target.value)}
                className='input-field'
              />
              <input
                type='number'
                placeholder='Enter shift value'
                value={decryptShift}
                onChange={(e) => setDecryptShift(Number(e.target.value))}
                className='input-field'
              />
              <button type='submit' className='submit-button'>
                Decrypt Message
              </button>
            </form>
          </div>

          {/* Output Section for Decryption */}
          {decryptedText && (
            <div className='output-section'>
              <div className='output-box'>
                <h3>Decrypted Plain Text</h3>
                <p>{decryptedText}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .input-section, .output-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          width: 100%;
        }
        .form-style {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .input-field {
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          width: 100%;
          max-width: 400px;
          font-size: 1rem;
        }
        .submit-button {
          padding: 12px 24px;
          background-color: #4CAF50;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
        }
        .submit-button:hover {
          background-color: #45a049;
        }
        .output-box {
          background-color: #f1f1f1;
          padding: 20px;
          margin: 10px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 600px;
        }
        .output-box h3 {
          margin-bottom: 10px;
          color: #333;
        }
        .output-box p {
          word-break: break-all;
          font-size: 1.2rem;
          color: #555;
        }
      `}</style>
    </>
  );
}

export default CaesarCipherPage;
