import React, { useState } from 'react';

interface GroceryItem {
  id: string;
  name: string;
  unit: string;
  prices: {
    carrefour: number;
    noon: number;
    lulu: number;
    naifMarket: number;
  };
}

export default function GroceryRadar() {
  // نموذج لبيانات السلع الأساسية في دبي (يتم تحديثها تلقائياً لاحقاً)
  const [items] = useState<GroceryItem[]>([
    { id: '1', name: 'أرز بسمتي فاخر', unit: '5 كجم', prices: { carrefour: 45, noon: 48, lulu: 42, naifMarket: 32 } },
    { id: '2', name: 'زيت طبخ نباتي', unit: '1.5 لتر', prices: { carrefour: 18, noon: 19, lulu: 17, naifMarket: 12 } },
    { id: '3', name: 'طماطم طازجة محلي', unit: '1 كجم', prices: { carrefour: 6, noon: 6.5, lulu: 5.5, naifMarket: 3 } },
    { id: '4', name: 'حليب كامل الدسم', unit: '4 لتر', prices: { carrefour: 22, noon: 21, lulu: 22, naifMarket: 18 } },
  ]);

  const getCheapest = (prices: GroceryItem['prices']) => {
    const minPrice = Math.min(prices.carrefour, prices.noon, prices.lulu, prices.naifMarket);
    let marketName = 'سوق نايف (جملة)';
    
    if (minPrice === prices.carrefour) marketName = 'كارفور';
    else if (minPrice === prices.noon) marketName = 'نون بقالة';
    else if (minPrice === prices.lulu) marketName = 'اللولو';
    
    return { price: minPrice, market: marketName };
  };

  const handleSafeRedirect = (market: string) => {
    let targetUrl = "https://noon.com";
    if (market === "كارفور") targetUrl = "https://carrefouruae.com";
    if (market === "اللولو") targetUrl = "https://luluhypermarket.com";
    if (market === "سوق نايف (جملة)") targetUrl = "https://google.com";

    alert(`⚠️ تنبيه قانوني آمن:\nسيتم توجيهك الآن إلى منصة ${market} الرسمية لإتمام الشراء مباشرة من طرفهم، دون أي مسؤولية مالية على التطبيق.`);
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="p-4 max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-sm animate-fade-in" dir="rtl">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-1">📊 OrbitFlow: رادار التوفير الذكي في دبي</h1>
        <p className="text-sm text-gray-500">مقارنة حية لأسعار السلع الأساسية بين المتاجر الكبرى والأسواق الشعبية (تحديث 2026)</p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-right">
          <thead className="bg-blue-900 text-white text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">السلعة الأساسية</th>
              <th className="px-3 py-3 font-semibold">كارفور</th>
              <th className="px-3 py-3 font-semibold">نون</th>
              <th className="px-3 py-3 font-semibold">اللولو</th>
              <th className="px-3 py-3 font-semibold bg-green-800 text-center">سوق نايف 🏪</th>
              <th className="px-4 py-3 font-semibold text-center bg-yellow-600">الأوفر لك</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {items.map((item) => {
              const cheapest = getCheapest(item.prices);
              return (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900">{item.name} <span className="text-xs text-gray-400">({item.unit})</span></td>
                  <td className="px-3 py-3 text-gray-600">{item.prices.carrefour} د.إ</td>
                  <td className="px-3 py-3 text-gray-600">{item.prices.noon} د.إ</td>
                  <td className="px-3 py-3 text-gray-600">{item.prices.lulu} د.إ</td>
                  <td className="px-3 py-3 text-green-700 font-bold bg-green-50 text-center">{item.prices.naifMarket} د.إ</td>
                  <td className="px-4 py-3 text-center bg-yellow-50 font-bold">
                    <div className="text-xs text-green-700 mb-1">{cheapest.price} د.إ في {cheapest.market}</div>
                    <button onClick={() => handleSafeRedirect(cheapest.market)} className="text-xs bg-blue-900 text-white px-2 py-1 rounded hover:bg-green-700 transition-all shadow-sm">تسوق الآن ➡️</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
