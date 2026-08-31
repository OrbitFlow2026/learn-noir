import React from 'react';
import GroceryRadar from './components/GroceryRadar';

export default function Router() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* عرض رادار أسعار البقالة في دبي كصفحة رئيسية للتطبيق */}
      <GroceryRadar />
    </div>
  );
}
