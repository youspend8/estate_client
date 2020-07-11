import React, { useState } from 'react';
import Label from '../../atoms/label/Label';

const Collapse = props => {
  const { title, children } = props;
  const [ isShow, setShow ] = useState(true);

  const handleShow = e => {
    setShow(!isShow);
  }

  const upward = () => <i className="icon material-icons" style={{fontSize: '24px'}}>arrow_upward</i>
  const downward = () => <i className="icon material-icons" style={{fontSize: '24px'}}>arrow_downward</i>

  return (
    <div className="collapse">
      <div className="collapse-tab" onClick={handleShow}>
        <h3 style={{display: 'flex', alignItems: 'center', fontWeight: 'bold', margin: 0}}>
          {
            <i className="material-icons">subject</i>
          }
          &nbsp;
          { title } 
        </h3>
        {
          isShow ? upward() : downward()
        }
      </div>
      {
        isShow ? (
          <div className="collapse-box">
            {
              children
            }
          </div>
        ) : ''
      }
    </div>
  )
}

export default Collapse;