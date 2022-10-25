import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import './Feed.css';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon></CreateIcon>
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"></InputOption>
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"></InputOption>
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"></InputOption>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"></InputOption>
        </div>
      </div>
    </div>
  );
}

export default Feed;
