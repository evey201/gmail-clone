import React from 'react'
import { useHistory } from 'react-router-dom'
import './emailRow.css'
import { Checkbox, IconButton } from '@material-ui/core'
// import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { selectMail } from '../../../features/mailSlice';
import { useDispatch } from 'react-redux';

const EmailRow = ({ id, title, subject, description, time }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = () => {
        dispatch(
            selectMail({
                id, 
                title, 
                subject, 
                description, 
                time
            })

        );
        history.push("/mail")
    };

  return (
    <div onClick={openMail} className="emailRow">
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
