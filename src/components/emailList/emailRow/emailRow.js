import React from 'react'
import './emailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
// import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="emailRow">
        <div className="emailRow__options">
            {/* <IconButton>
                <DragIndicatorIcon />
            </IconButton> */}
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>

        <h3 className="emailRow__title">
            {title}
        </h3>

        <div className="emailRow__message">
            <h4>
                {subject}{" "}
                <span className="emailRow__description">- {description}</span>
            </h4>
        </div>

        <p className="emailRow__time">
            {time}
        </p>
    </div>
  )
}

export default EmailRow
