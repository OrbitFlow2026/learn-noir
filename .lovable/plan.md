# OrbitFlow final integration

## Implementation
- Replace all visible Madar / مدار branding with OrbitFlow / أوربت فلو across the splash, headers, home, legal copy, metadata, and accessible image labels.
- Keep the approved bilingual slogan and premium launch banner.
- Remove remaining unavailable/lock presentation so every learning path and all three financial modules are free and readable.
- Keep Stake and Sarwa destinations hardcoded as the exact absolute string `https://tinyurl.com`, with all CTA links opening in a new tab.
- Preserve the bilingual 50/30/20 calculator label using AED / Currency.

## Validation and release
- Verify source references, CTA hrefs, bilingual UI, and unlocked states in the running app.
- Run the project build, check security status, and publish the verified version.

## Technical details
- Update existing React content/config/components only; retain the current TanStack Start architecture and Motion transitions.
- Rename internal app/component and logo asset identifiers where they carry the retired brand, without changing application behavior.
