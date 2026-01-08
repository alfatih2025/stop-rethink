import { useState } from 'react';
import GamblingLanding from '@/components/GamblingLanding';
import AwarenessPage from '@/components/AwarenessPage';

const Index = () => {
  const [showAwareness, setShowAwareness] = useState(false);

  const handleLogin = () => {
    setShowAwareness(true);
  };

  const handleBack = () => {
    setShowAwareness(false);
  };

  return showAwareness ? (
    <AwarenessPage onBack={handleBack} />
  ) : (
    <GamblingLanding onLogin={handleLogin} />
  );
};

export default Index;
