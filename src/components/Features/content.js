import React from "react";

import IconAccessAnywhere from './images/IconAccessAnywhere';
import IconSecurity from './images/IconSecurity';
import IconCollaboration from './images/IconCollaboration';
import IconAnyFile from './images/IconAnyFile';

export default [
  {
    header:"Access your files, anywhere",
    paragraph:
    "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    image: <IconAccessAnywhere />
  },
  {
    header:"Security you can trust",
    paragraph:
    "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    image: <IconSecurity />
  },
  {
    header:"Real-time collaboration",
    paragraph:
    "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    image: <IconCollaboration />
  },
  {
    header:"Store any type of file",
    paragraph:
    "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    image: <IconAnyFile/>
  }
]
