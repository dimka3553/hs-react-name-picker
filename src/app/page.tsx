"use client";
import NameDisplay from '@/components/NameDisplay';
import ResponseButtons from '@/components/ResponseButtons';
import SelectedNamesList from '@/components/SelectedNamesList';
import { useState } from 'react';
import { names } from '@/data/names';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [rejectedNames, setRejectedNames] = useState<string[]>([]);
  const [animationDirection, setAnimationDirection] = useState('exit');

  const handleYes = () => {
    setSelectedNames([...selectedNames, names[currentIndex]]);
    setAnimationDirection('exit');
    setCurrentIndex(currentIndex + 1);
  };

  const handleNo = () => {
    setRejectedNames([...rejectedNames, names[currentIndex]]);
    setAnimationDirection('exit');
    setCurrentIndex(currentIndex + 1);
  };

  const handleMaybe = () => {
    setAnimationDirection('exit');
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <main>
      {currentIndex < names.length ? (
        <>
          <AnimatePresence mode="wait">
            <NameDisplay key={currentIndex} name={names[currentIndex]} animationDirection={animationDirection} />
          </AnimatePresence>
          <ResponseButtons onYes={handleYes} onNo={handleNo} onMaybe={handleMaybe} />
        </>

      ) :
        null}
      {
        selectedNames.length > 0 && (
          <SelectedNamesList selectedNames={selectedNames} />
        )
      }
    </main>
  );
}
