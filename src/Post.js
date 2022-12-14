import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import './Post.css';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        {/* {photoUrl ? <h2>yes</h2> : <h2>no</h2>} */}
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray"></InputOption>
        <InputOption Icon={ChatIcon} title="Comment" color="gray"></InputOption>
        <InputOption Icon={ShareIcon} title="Share" color="gray"></InputOption>
        <InputOption Icon={SendIcon} title="Send" color="gray"></InputOption>
      </div>
    </div>
  );
});

export default Post;
