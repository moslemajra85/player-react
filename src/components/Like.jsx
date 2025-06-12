import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { useState } from 'react';

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div>
      {isLiked ? (
        <IoIosHeartEmpty onClick={handleLike} />
      ) : (
        <IoMdHeart color="red" onClick={handleLike} />
      )}
    </div>
  );
};

export default Like;
