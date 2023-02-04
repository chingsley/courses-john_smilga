import React, { useState } from 'react';
import { UserAnswerProps } from './propTypes';
import UserAnswer from './UserAnswer';

interface UserAnswerListProps {
  userAnswers: UserAnswerProps[];
}
const UserAnswerList: React.FC<UserAnswerListProps> = (props) => {
  const [showBreakDown, setShowBreakDown] = useState(false);

  return (
    <div>
      <button
        className='btn-show-breakdown'
        onClick={() => setShowBreakDown(!showBreakDown)}
      >
        {showBreakDown ? 'hide' : 'show'} breakdown {'>'}
      </button>
      <div className='breakdown'>
        {showBreakDown &&
          props.userAnswers.map((userAn, idx) => (
            <UserAnswer key={idx} {...userAn} />
          ))}
      </div>
    </div>
  );
};

export default UserAnswerList;
