

import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './AirportDetails.css';
import { PiUploadSimpleBold } from "react-icons/pi";
import { LiaToggleOffSolid, LiaToggleOnSolid } from 'react-icons/lia';

function AirportDetail() {
  const location = useLocation();
  const { airport } = location.state || {};

  const [terminals, setTerminals] = useState([
    { id: 1, title: 'Terminal 1', description: 'Optional metadata should be two lines.' },
    { id: 2, title: 'Terminal 2', description: 'Optional metadata should be two lines.' },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: 'Lost & Found' },
    { id: 2, name: 'Lounge' },
    { id: 3, name: 'Money Exchange' }
  ]);

  const [serviceName, setServiceName] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTerminal, setSelectedTerminal] = useState(null);
  const [terminalTitle, setTerminalTitle] = useState('');
  const [terminalDescription, setTerminalDescription] = useState('');

  if (!airport) {
    return <div>Airport not found</div>;
  }

  const handleSave = () => {
    if (serviceName.trim() === '') {
      alert('Please enter a service name');
      return;
    }

    const newService = {
      id: services.length + 1,
      name: serviceName,
      category,
      subCategory,
      description,
      showImage
    };

    setServices([...services, newService]);

    setServiceName('');
    setCategory('');
    setSubCategory('');
    setDescription('');
    setShowImage(false);

    console.log('Service saved:', newService);
  };

  const handleTerminalClick = (terminal) => {
    setSelectedTerminal(terminal);
    setTerminalTitle(terminal.title);
    setTerminalDescription(terminal.description);
    setIsPopupOpen(true);
  };
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedTerminal(null);
    setTerminalTitle('');
    setTerminalDescription('');
  };

  const handleSaveTerminal = () => {
    if (selectedTerminal) {
      const updatedTerminals = terminals.map(t =>
        t.id === selectedTerminal.id ? { ...t, title: terminalTitle, description: terminalDescription } : t
      );
      setTerminals(updatedTerminals);
    } else {
      const newTerminal = {
        id: terminals.length + 1,
        title: terminalTitle,
        description: terminalDescription
      };
      setTerminals([...terminals, newTerminal]);
    }
    handleClosePopup();
  };

  return (
    <div className="airport-detail">

      <div className="breadcrumb">
        <Link to="/">Airports</Link> &gt; {airport.name}
      </div>
      <h1>{airport.name}</h1>

      <div className="tabs">
        <button className="tab active">Terminals</button>
        <button className="tab">Transport</button>
        <button className="tab">Contact details</button>
      </div>

      <div className="terminals">
        {terminals.map(terminal => (
          <div key={terminal.id} className="terminal-card" onClick={() => handleTerminalClick(terminal)}>
            <img src="/image.png" alt={terminal.title} />
            <div className="terminal-info">
              <h3>{terminal.title}</h3>
              <p>{terminal.description}</p>
            </div>
            <button className="more-options">...</button>
          </div>
        ))}
        <button className="add-terminal" onClick={() => setIsPopupOpen(true)}>+ Add Terminal</button>
      </div>



      <div className='s'>
        <h1>Service</h1>
      </div>

      <div>
        <p>Lost & Found</p>
        <hr />
      </div>

      <form className='form-ele'>

        <div className="form-group">
          <label htmlFor="serviceName">Service Name</label>
          <input type="text" id="serviceName" value="Lost & found" />
        </div>



        <div className="form-group2">
          <label htmlFor="category">Category</label>
          <select id="category">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>

        <div className="form-group2">
          <label htmlFor="subCategory">Sub Category</label>
          <select id="subCategory">
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>

        <div className="form-group1">

          <button type='button' className="upload-button1">
            <PiUploadSimpleBold className='ic' />Upload Image
          </button>

          <button className="toggle-btn" onClick={handleToggle}>
            {isToggled ? <LiaToggleOnSolid size={24} /> : <LiaToggleOffSolid size={24} />}
            {isToggled ? "Hide Image" : " Show Image"}
          </button>
        </div>

        <button type="submit" className="save-button" onClick={()=>handleSave()}>Save</button>



      </form>

      <div className=" form-group description-group">
        <label htmlFor="description">Description</label>
        <input type="text" id="description" placeholder="type here" />
      </div>

      <div>
        <p>Lounge</p>
        <hr />
      </div>

      <div>
        <p>Mony Exchange</p>
        <hr />
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{selectedTerminal ? 'Edit Terminal' : 'Add Terminal'}</h2>
            <input
              type="text"
              placeholder="Terminal title"
              value={terminalTitle}
              onChange={(e) => setTerminalTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              value={terminalDescription}
              onChange={(e) => setTerminalDescription(e.target.value)}
            ></textarea>


            <div className='po'>
              <div>
                <button className="upload-btn">📁 Upload Image</button>
              </div>
              <div className="popup-buttons">
                <button onClick={handleClosePopup}>Cancel</button>
                <button onClick={handleSaveTerminal}>Continue</button>
              </div></div>
          </div>
        </div>
      )}


    </div>
  );
}

export default AirportDetail;






