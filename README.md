# Madar Growth Hub

Build a premium mobile web app for a micro-learning platform called "Madar" (مدار). 

1. Theme: Executive dark-mode UI (deep blues, charcoal gray, neon teal accents). Modern sans-serif fonts. Smooth animated screen transitions.

2. Language Toggle: Put a prominent "العربية / EN" button at the top bar. Clicking "العربية" translates everything and switches layout to Right-to-Left (RTL). Clicking "EN" switches to Left-to-Right (LTR).

3. Splash Screen: Show logo placeholder, name "Madar", slogan "Expand your horizons in 5 minutes", and a "Get Started" button.

4. Home Screen: Show user greeting, a daily streak counter (🔥 3 Day Streak), and 3 Learning Paths:

   - "AI for Business | الذكاء الاصطناعي في الأعمال"

   - "Financial Literacy | الثقافة المالية والاستثمار"

   - "Agile Leadership | القيادة الرشيقة وإدارة المشاريع"

5. Path 1 Content (AI for Business): 

   - 3 swipeable cards explaining Generative AI, Prompt Engineering, and workplace productivity.

   - Quiz Question: "To get the most accurate report from AI, which prompt is best?" 

   - Option A: "write a report" (Turns Red, feedback: "Too generic!"). 

   - Option B: "Act as a Dubai expert and analyze..." (Turns Green, feedback: "Correct!").

6. Path 2 Content (Financial Literacy):

   - 3 swipeable cards explaining Dubai wealth building, Fractional Real Estate, and Automated Index Funds (ETFs).

   - Quiz Question: "Best way for expats to start investing with low capital?"

   - Option A: "Luxury off-plan apartment" (Turns Red).

   - Option B: "Monthly fixed allocation into low-cost ETFs" (Turns Green).

Ensure all components and quiz options are interactive and fully bilingual based on the language toggle.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://learn-noir.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ddcfb3ba-b7d6-4823-bc7f-8b86aa74f025).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
