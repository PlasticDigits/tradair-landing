# Traken AI Style Guide

## Brand Overview

Traken AI is a next‑generation trading intelligence brand. The visual identity communicates confident, futuristic innovation with a calm, premium feel. The aesthetic is deep‑space purples, neon energy glows, and smooth, curved grids with wireframe globes and floating orbs. All motion is fluid and understated—never glitchy—reinforcing reliability and clarity.

## Visual Themes

### Primary Theme: Neo‑Futuristic Cosmic Grid

- **Use Case**: Marketing site, hero, product pages, presentations
- **Aesthetic**: Deep‑space purples, neon violet/magenta accents, curved radial grid, wireframe globes, soft glow orbs, star flares
- **Background**: Radial/linear gradient from deep space to indigo with a low‑opacity curved grid overlay and subtle vignette

### Secondary Theme: Clean Professional

- **Use Case**: Documentation, legal, long‑form content
- **Aesthetic**: Modern, clean, approachable; reduced effects; high readability
- **Background**: Light neutrals with restrained purple accents

## Color Palette

### Core Brand Colors

- **Electric Violet**: `#8A3CFF` (Primary accent, CTAs, highlights)
- **Magenta Glow**: `#E45EFF` (Secondary accent, glows)
- **Soft Lavender**: `#C27EFF` (Sub-accents, gradients)

### Background & Surfaces

- **Deep Space**: `#0B0814` (Primary background)
- **Cosmic Indigo**: `#2B0B65` (Gradient stop / section accents)
- **Vignette Overlay**: `rgba(0,0,0,0.25)` (edge shading)

### Text & Lines

- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#EDEAF7`
- **Grid Stroke**: `#3B2A66` at 12–18% opacity

### Optional Accents

- **Neon Cyan**: `#00D4FF` (tech highlights)
- **Electric Blue**: `#5BC0FF` (interactive states)

### Gradient Combinations

- **Deep‑Space Radial**: radial‑gradient(circle at 50% 55%, `#2B0B65` 0%, `#0B0814` 58%, `#0B0814` 100%)
- **Violet → Magenta CTA**: linear‑gradient(135deg, `#8A3CFF` 0%, `#E45EFF` 100%)
- **Lavender Sheen**: linear‑gradient(180deg, `#C27EFF` 0%, transparent 70%)

## Typography

### Font Stack Hierarchy

#### Primary Display Font — Azonix

```css
font-family: "Azonix", Arial, sans-serif;
```

- **Usage**: Logo, main brand headlines, hero titles
- **Character**: Bold, futuristic, brand-focused
- **Best for**: H1 headlines, brand elements, call-to-action headers

#### Secondary Interface Font — Exo 2

```css
font-family: "Exo 2", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

- **Usage**: UI elements, subheadings, navigation, buttons
- **Character**: Modern, tech-forward, clean
- **Best for**: H2-H3 headings, interface text, feature titles

#### Body Font — Inter

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
```

- **Usage**: Body text, paragraphs, general content
- **Character**: Highly readable, neutral, professional
- **Best for**: Paragraphs, descriptions, documentation

#### Accent Font — Orbitron (Optional)

```css
font-family: "Orbitron", monospace;
```

- **Usage**: Special cyberpunk elements, tech callouts, stats
- **Character**: Futuristic, geometric, sci-fi
- **Best for**: Data displays, tech specs, cyberpunk theme elements

### Font Hierarchy

#### Brand Headlines (H1) — Azonix

- **Size**: `clamp(2.5rem, 6vw, 5.75rem)`
- **Weight**: 700 (Bold, all‑caps suggested)
- **Line Height**: 1.05–1.1
- **Font**: Azonix
- **Usage**: Hero titles, brand statements

#### Major Headings (H2) — Exo 2

- **Size**: `clamp(1.75rem, 3.2vw, 2.5rem)`
- **Weight**: 600 (Semi‑bold)
- **Line Height**: 1.15–1.2
- **Font**: Exo 2
- **Usage**: Section headers, feature headlines

#### Section Headers (H3) — Exo 2

- **Size**: 1.5rem (24px)
- **Weight**: 500 (Medium)
- **Line Height**: 1.3
- **Font**: Exo 2
- **Usage**: Feature titles, card headers, navigation

#### Body Text — Inter

- **Size**: 1rem (16px)
- **Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Font**: Inter
- **Usage**: Paragraphs, descriptions, general content

#### Small Text — Inter

- **Size**: 0.875rem (14px)
- **Weight**: 400 (Regular)
- **Line Height**: 1.5
- **Font**: Inter
- **Usage**: Captions, footnotes, fine print

#### Tech/Data Elements — Orbitron

- **Size**: Variable
- **Weight**: 400-700
- **Line Height**: 1.4
- **Font**: Orbitron
- **Usage**: Statistics, data points, cyberpunk callouts

### Special Typography Effects

#### Neon Headers (Orbitron/Exo 2)

- **Glow Effect**: `text-shadow: 0 0 10px currentColor`
- **Neon Style**: Bright cyan/pink colors with dark backgrounds
- **Lettercase**: Often uppercase for emphasis
- **Font**: Orbitron for maximum impact, Exo 2 for readability

#### Brand Elements (Azonix)

- **Usage**: Always use for logo text and main brand statements
- **Pairing**: Combine with Exo 2 subheadings for hierarchy
- **Contrast**: Ensure sufficient spacing when mixing with other fonts

## Logo Usage

### Primary Logo

- **File**: `traken-logo-horizontal-white-text-no-bg.png`
- **Usage**: Dark backgrounds, hero sections
- **Minimum Size**: 120px width

### Secondary Logo

- **File**: `traken-logo-horizontal-black-text-no-bg.png`
- **Usage**: Light backgrounds, professional contexts
- **Minimum Size**: 120px width

### Logo Variations Available

- Horizontal layouts (preferred for headers)
- Square/icon versions (for social media, favicons)
- White text/black text versions
- With/without background versions

### Logo Guidelines

- Maintain minimum 20px clear space around logo
- Never stretch or distort proportions
- Ensure sufficient contrast with background
- Use SVG format when possible for crisp rendering

## UI Components

### Buttons

#### Primary Button

- **Background**: Violet → Magenta gradient (`#8A3CFF` → `#E45EFF`)
- **Text**: White, 600 weight
- **Border Radius**: 10–14px
- **Padding**: 12px 24px
- **Shadow/Glow**: `0 0 40px rgba(138,60,255,0.35)`
- **Hover**: Slight scale (1.05) + intensified glow

#### Secondary Button

- **Background**: Transparent
- **Border**: 2px solid `#8A3CFF`
- **Text**: `#8A3CFF`, 600 weight
- **Border Radius**: 10–14px
- **Padding**: 10px 22px
- **Hover**: Soft fill with `#2B0B65` + outer glow

#### Cyberpunk Button

- **Background**: Deep space with neon border
- **Border**: 2px solid neon cyan or magenta
- **Text**: Neon colored with glow effect
- **Animation**: Subtle pulsing glow

### Cards

- **Background**: Translucent deep‑purple surface `rgba(18, 12, 35, 0.6)` with `backdrop-filter: blur(8px)`
- **Border Radius**: 16px
- **Shadow/Glow**: `0 10px 40px rgba(138, 60, 255, 0.15)`
- **Padding**: 24px
- **Border**: 1px solid `rgba(138,60,255,0.25)` (optional)

### Icons

- **Style**: Outline style preferred
- **Weight**: 2px stroke width
- **Color**: Match text color or use purple accent
- **Size**: 24px standard, 20px for inline use

## Layout & Spacing

### Grid System

- **Max Width**: 1200px for main content
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Spacing Scale

- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **2XL**: 48px
- **3XL**: 64px

## Effects & Animations

### Cybercore 2050 Aesthetic

- **Smooth Flowing Glow**: Continuous neon energy patterns, never flickering
- **Neural Network Pulses**: Gentle pulsing lights that simulate AI brain activity
- **Quantum Field Effects**: Smooth gradient waves and energy flows
- **Curved Radial Grid**: Low‑opacity grid (`#3B2A66` @ 12–18%) subtly rotates or parallax‑moves
- **Wireframe Globes & Orbs**: Slow drift/parallax, very soft inner glow
- **NO Glitch Effects**: Avoid any jarring, flickering, or chaotic visual disturbances

### Hover Effects

- **Scale**: `transform: scale(1.05)` for buttons/cards
- **Glow**: Box-shadow expansion for cyberpunk elements
- **Color Transition**: 0.3s ease for color changes
- **Energy Pulse**: Smooth pulsing glow that intensifies on hover

### Loading Animations

- **Pulse**: For skeleton loading states
- **Spin**: For loading spinners
- **Gradient Shift**: For progress indicators
- **Neural Flow**: Smooth energy waves for AI-themed loading

### Parallax & Motion

- **Subtle Movement**: For hero sections and feature showcases
- **Scroll-triggered**: Fade-in animations for content sections
- **Performance**: Always prioritize 60fps animations
- **Smooth Transitions**: All movements should be fluid and continuous
- **Reduced Motion**: Respect `prefers-reduced-motion` with static backgrounds

### Background Layers (Web)

- **Layer 1 — Gradient**: Deep‑space radial/linear gradient (see palette)
- **Layer 2 — Grid**: SVG curved grid overlay, stroke `#3B2A66` at 0.12–0.18 opacity
- **Layer 3 — Orbs/Globes**: SVG or CSS radial‑gradients with blur and screen blend
- **Layer 4 — Stars**: Small flares with occasional twinkle

## Accessibility

### Color Contrast

- **AA Standard**: Minimum 4.5:1 contrast ratio for normal text
- **AAA Standard**: 7:1 contrast ratio for important content
- **Test Tools**: Use WebAIM contrast checker

### Focus States

- **Outline**: 2px solid `#8B5CF6` with 2px offset
- **Visible**: Always visible for keyboard navigation
- **Custom**: Match component styling while maintaining visibility

## Usage Guidelines

### Do's

- Use electric violet/magenta as primary accents across all touchpoints
- Maintain consistent spacing using the defined scale
- Combine clean and cyberpunk themes purposefully
- Ensure all text meets accessibility contrast requirements
- Use the horizontal logo layout in headers and main branding

### Don'ts

- Don't use colors outside the defined palette
- Don't combine too many neon effects in professional contexts
- Don't stretch or modify logo proportions
- Don't use the cyberpunk theme for critical business information
- Don't sacrifice readability for visual effects
- **NEVER use glitch effects, flickering, or chaotic visual disturbances**
- **AVOID any jerky, random, or disruptive animations**
- **DON'T create jarring visual interruptions that break the smooth cybercore flow**

### Font Implementation Guide

#### Loading Priority

1. **Inter** (body text) - Load first for immediate readability
2. **Exo 2** (interface) - Load second for UI elements
3. **Azonix** (display) - Load locally for brand consistency
4. **Orbitron** (accent) - Load last as it's decorative

## Image Assets Structure

### Directory Layout

**Graphics**

- `graphics/tech/` - AI and technology illustrations (brain circuits, processors, robots)
- `graphics/charts/` - Trading charts and analytics dashboards (candlesticks, P&L, market data)

**Icons**

- `icons/ai/` - AI-themed icons (neural networks, machine learning, AI heads)
- `icons/crypto/` - Cryptocurrency icons (Bitcoin, Ethereum, wallets, trading)
- `icons/interface/` - UI elements (dashboards, settings, notifications, analytics)

**Illustrations**

- `illustrations/hero/` - Large hero section graphics (AI trading scenes, dashboards, wireframe globes)
- `illustrations/backgrounds/` - Pattern overlays (curved radial grids, gradient vignettes, star flares)
- `illustrations/features/` - Feature showcase graphics (automation, risk management)

### Usage Guidelines

- **Hero sections**: Use `illustrations/hero/` for main landing areas
- **Feature highlights**: Use `illustrations/features/` for product capabilities
- **Data visualization**: Use `graphics/charts/` for performance metrics
- **Navigation/UI**: Use `icons/interface/` for interactive elements
- **Background elements**: Use `illustrations/backgrounds/` as subtle overlays
- **Technology emphasis**: Use `graphics/tech/` and `icons/ai/` for AI credibility
- **Trading context**: Use `icons/crypto/` for cryptocurrency relevance

All images follow the established color palette and maintain transparent backgrounds for flexible integration. Prefer SVG for grids and wireframes to ensure crisp rendering and lightweight motion.

This style guide ensures consistent branding across all Traken AI digital properties while maintaining the perfect balance between professional credibility and cutting‑edge innovation that appeals to our target audience of traders and AI enthusiasts.
