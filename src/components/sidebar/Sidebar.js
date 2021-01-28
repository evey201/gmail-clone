import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, IconButton } from '@material-ui/core';
import './sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SendIcon from '@material-ui/icons/Send';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import SidebarOption from './sidebarOption/SidebarOption';
import { openSendMessage } from '../../features/mailSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button 
        startIcon={<AddIcon fontSize="large"/>}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      > Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={SendIcon} title="Sent" number={20} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={4} />
      <SidebarOption Icon={ExpandMoreIcon} title="More"/>


      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
            <IconButton>
                <PersonIcon />
            </IconButton>
            <IconButton>
                <DuoIcon />
            </IconButton>
            <IconButton>
                <PhoneAndroidIcon />
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
