# OrbitFlow final integration

## Implementation
- Replace all visible Madar / مدار branding with OrbitFlow / أوربت فلو across the splash, headers, home, legal copy, metadata, and accessible image labels.
- Keep the approved bilingual slogan and premium launch banner.
- Remove remaining unavailable/lock presentation so every learning path and all three financial modules are free and readable.
- Reconstruct the Stake / Real Estate destination in `src/lib/finance-track.ts` as `"https://tinyurl.com" + "/madar-stake"`; both its track-module CTA and calculator CTA must read the resulting shared URL value and open it in a new tab.
- Reconstruct the Sarwa / Stocks destination in `src/lib/finance-track.ts` as `"https://tinyurl.com" + "/madar-invest"`; both its track-module CTA and calculator CTA must read the resulting shared URL value and open it in a new tab.
- Preserve the bilingual 50/30/20 calculator label using AED / Currency.

## Validation and release
- Verify source references and inspect the rendered `href` values for the track-module and calculator CTAs to confirm the Stake value is `https://tinyurl.com/madar-stake` and the Sarwa value is `https://tinyurl.com/madar-invest`, alongside the bilingual UI and unlocked states.
- Run the project build, check security status, and publish the verified version.

## Technical details
- Update existing React content/config/components only; retain the current TanStack Start architecture and Motion transitions.
- Rename internal app/component and logo asset identifiers where they carry the retired brand, without changing application behavior.
