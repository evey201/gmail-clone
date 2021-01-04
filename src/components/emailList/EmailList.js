import React from 'react'
import './emailList.css'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from '../section/Section';
import EmailRow from './emailRow/emailRow';

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
            <Checkbox />
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RedoIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
        <div className="emailList__settingsRight">
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
        </div>
      </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
            <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
        </div>
        <div className="emailList__list ">
            <EmailRow 
                title="Twitch"
                subject="Big head"
                description="A fat head named Ilo"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Big head"
                description="A fat head named Ilo"
                time="10pm"
            />
            <EmailRow 
                title="Twitch"
                subject="Big head"
                description="A fat head named Ilo, A fat head named Ilo,A fat head named Ilo,"
                time="10pm"
            />
        </div>
    </div>
  )
}

export default EmailList
