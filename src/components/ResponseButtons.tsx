import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled(motion.button)`
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  color: #fff;
  background-color: #888;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    transform: scale(0.98);
  }
`;

function ResponseButtons({ onYes, onNo, onMaybe }: { onYes: () => void; onNo: () => void; onMaybe: () => void }) {
    return (
        <div>
            <Button whileTap={{ scale: 0.95 }} style={{ backgroundColor: '#4CAF50' }} onClick={onYes}>Yes</Button>
            <Button whileTap={{ scale: 0.95 }} style={{ backgroundColor: '#F44336' }} onClick={onNo}>No</Button>
            <Button whileTap={{ scale: 0.95 }} style={{ backgroundColor: '#FFEB3B', color: '#000' }} onClick={onMaybe}>Maybe</Button>
        </div>
    );
}

export default ResponseButtons;
