import React from 'react';
import GroceryRadar from './components/GroceryRadar';

export default function Router() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <GroceryRadar />
    </div>
  );
}

// تصدير افتراضي احتياطي لتجنب أخطاء Vite
export const AppRouter = Router;
