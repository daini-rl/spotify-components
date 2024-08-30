import React from 'react';
import Button from './Button';
import { faCirclePlay, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import './ActionButtons.css';

function ActionButtons() {
  return (
    <>
      <div className="container">
        {/*Play Button*/}
        <Button variant="contained" icon={faCirclePlay} color="green" size="large" />
        {/*Follow Button*/}
        <Button label="follow" variant="outlined" color="white" size="small" />
        {/*More Button*/}
        <Button variant="icon" icon={faEllipsis} color="gray" size="medium" />
      </div>
    </>
  );
}

export default ActionButtons;
