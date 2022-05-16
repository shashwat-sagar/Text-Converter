import React, { useState } from 'react'
import { Button, Drawer,Icon,Modal } from 'rsuite';
import { useModalState } from '../misc/custom-hooks';

const Themes = (props) => {
    const { isOpen, open, close } = useModalState();
 
  return (
    <>
    <Button className='themeBtn' color='orange' icon="adjust" onClick={open} >
      Themes
      </Button>
     
    
    <Modal show={isOpen} onHide={close} placement="right">
      <Modal.Header>
        <Modal.Title>Choose Theme</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className='parent'>
      <div className='child'>
      <div className='grand-child apple' onClick={props.apple}></div>
      <div className='grand-child red1' onClick={props.red}></div>
      <div className='grand-child rose' onClick={props.rose}></div>
      
      
      </div>
      <div className='child'>
      <div className='grand-child orange' onClick={props.orange}></div>
      <div className='grand-child yellow' onClick={props.yellow}></div>
      <div className='grand-child green'  onClick={props.green}></div>
      
      </div>
      <div className='child'>
      <div className='grand-child violet' onClick={props.violet}></div>
      <div className='grand-child blue' onClick={props.blue}></div>
      <div className='grand-child cyan' onClick={props.cyan}></div>
     
      </div>
    </div>
      </Modal.Body>
      <Modal.Footer>
          
        <Button block onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Themes