import React, { useState } from 'react';

function HomePage() {
  const [userInput, setUserInput] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedPlaintext, setDecryptedPlaintext] = useState('');
  const [cipherInput, setCipherInput] = useState('');
  const [keyInput, setKeyInput] = useState('');

  const generateRandomKey = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleEncryption = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') {
      alert('Please enter some text to encrypt.');
      return;
    }

    const generatedKey = generateRandomKey(userInput.length);
    setKey(generatedKey);

    const cipherTextArray = userInput.split('').map((char, index) => {
      return String.fromCharCode(
        char.charCodeAt(0) ^ generatedKey.charCodeAt(index)
      );
    });

    setCipherText(cipherTextArray.join(''));
  };

  const handleDecryption = (e) => {
    e.preventDefault();
    if (cipherInput.trim() === '' || keyInput.trim() === '') {
      alert('Please enter both the ciphertext and the key to decrypt.');
      return;
    }
    if (cipherInput.length !== keyInput.length) {
      alert('Ciphertext and key must have the same length.');
      return;
    }

    const plainTextArray = cipherInput.split('').map((char, index) => {
      return String.fromCharCode(
        char.charCodeAt(0) ^ keyInput.charCodeAt(index)
      );
    });

    setDecryptedPlaintext(plainTextArray.join(''));
  };

  return (
    <>
      <div className='container'>
        <div className='col-flex'>
          <div className='text-overlay intro-header text-primary'>
            Secure Your Messages with One-Time Pad Cryptography
          </div>
          <div className='text-overlay intro-next text-primary'>
            Enter a message below to see how the One-Time Pad (OTP) algorithm can keep your data secure. The output will include the encrypted message and a unique encryption key.
          </div>
          
          {/* Encryption Section */}
          <div className='input-section'>
            <form onSubmit={handleEncryption} className='form-style'>
              <input 
                type='text' 
                placeholder='Enter your message to encrypt' 
                value={userInput} 
                onChange={(e) => setUserInput(e.target.value)} 
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
              <div className='output-box'>
                <h3>Generated Encryption Key</h3>
                <p>{key}</p>
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
                type='text' 
                placeholder='Enter the key' 
                value={keyInput} 
                onChange={(e) => setKeyInput(e.target.value)} 
                className='input-field'
              />
              <button type='submit' className='submit-button'>
                Decrypt Message
              </button>
            </form>
          </div>

          {/* Output Section for Decryption */}
          {decryptedPlaintext && (
            <div className='output-section'>
              <div className='output-box'>
                <h3>Decrypted Plain Text</h3>
                <p>{decryptedPlaintext}</p>
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
          // min-height: 100vh;
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

export default HomePage;
