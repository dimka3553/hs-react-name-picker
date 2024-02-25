import { motion } from 'framer-motion';
import styled from 'styled-components';

const NameCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 90%;
  max-width: 300px;
  margin: 40px auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 15px 25px rgba(0,0,0,0.2);
  font-size: 28px;
  font-weight: bold;
  user-select: none;
  position: relative; /* For stacking cards */
  will-change: transform; /* Optimize for animations */
`;

const cardVariants = {
    offscreen: {
        x: '-100vw',
    },
    enter: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
    exit: {
        x: '100vw',
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
        },
    },
};

function NameDisplay({ name, animationDirection }: { name: string, animationDirection: string }) {
    return (
        <NameCard
            variants={cardVariants}
            initial="offscreen"
            animate="enter"
            exit={animationDirection}
        >
            {name}
        </NameCard>
    );
}

export default NameDisplay;
