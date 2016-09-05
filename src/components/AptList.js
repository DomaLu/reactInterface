import React, { Component } from 'react';


const AptList = ({singleItem}) => {

  return (
    <li className='pet-item media'>
      <div className='pet-info media-body'>
        <div className='pet-head'>
          <span className='pet-name'>{singleItem.petName}</span>
          <span className='apt-date pull-right'>{singleItem.aptDate}</span>
        </div>
        <div className='owner-name'><span className='label-item'>Owner:</span>
        {singleItem.ownerName}
        </div>
        <div className='apt-notes'>{singleItem.aptNotes}</div>
      </div>
    </li>
  )
}

export default AptList;
