import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from 'react';

interface Props{
    onClick: () => void;
}
const Like = ({onClick}: Props) => {
    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus(prevStatus => !prevStatus);
        onClick();
    }
    if(status) return <AiFillHeart onClick={toggle} color="#ff0000" size="40"/>;
    return <AiOutlineHeart onClick={toggle} size="40"/>;
}

export default Like
