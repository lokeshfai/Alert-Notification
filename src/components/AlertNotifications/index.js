// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => {
  const renderInfoNotification = () => (
    <Notification>
      <MdInfo className="notification-icon info" />
      <div>
        <h3 className="notification-heading">Info</h3>
        <p className="notification-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  const renderSuccessNotification = () => (
    <Notification>
      <AiFillCheckCircle className="notification-icon success" />
      <div>
        <h3 className="notification-heading1">Success</h3>
        <p className="notification-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="notification-icon error" />
      <div>
        <h3 className="notification-heading2">Error</h3>
        <p className="notification-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotification = () => (
    <Notification>
      <MdWarning className="notification-icon warning" />
      <div>
        <h3 className="notification-heading3">Warning</h3>
        <p className="notification-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Alert Notifications</h1>
        {renderSuccessNotification()}
        {renderErrorNotification()}
        {renderWarningNotification()}
        {renderInfoNotification()}
      </div>
    </div>
  )
}

export default AlertNotifications
