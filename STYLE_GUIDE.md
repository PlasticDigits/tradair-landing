# Tradair AI Style Guide

## Brand Overview

Tradair AI represents the cutting-edge intersection of artificial intelligence and cryptocurrency trading. Our visual identity embodies innovation, trust, and futuristic technology while maintaining professional accessibility for traders and investors.

## Visual Themes

### Primary Theme: Clean Professional

- **Use Case**: Landing pages, documentation, business communications
- **Aesthetic**: Modern, clean, approachable yet sophisticated
- **Background**: Light gradients, white/off-white base

### Secondary Theme: Cyberpunk Futuristic

- **Use Case**: AI feature showcases, promotional content, social media
- **Aesthetic**: Dark, neon-lit, high-tech, cutting-edge
- **Background**: Dark purple/black with neon accents

## Color Palette

### Primary Colors

- **Tradair Purple**: `#8B5CF6` (Primary brand color)
- **Deep Purple**: `#7C3AED` (Hover states, emphasis)
- **Light Purple**: `#A855F7` (Accents, gradients)

### Secondary Colors

- **Neon Cyan**: `#00D4FF` (Cyberpunk theme highlights)
- **Neon Pink**: `#FF00FF` (AI emphasis, alerts)
- **Electric Blue**: `#0099FF` (Interactive elements)

### Neutral Colors

- **Pure White**: `#FFFFFF` (Clean theme backgrounds)
- **Light Gray**: `#F8FAFC` (Section backgrounds)
- **Medium Gray**: `#64748B` (Secondary text)
- **Dark Gray**: `#1E293B` (Primary text)
- **Cyber Black**: `#0A0A0A` (Dark theme background)

### Gradient Combinations

- **Purple Gradient**: Linear gradient from `#8B5CF6` to `#A855F7`
- **Cyber Gradient**: Linear gradient from `#0A0A0A` to `#1A1A2E`
- **Neon Glow**: Radial gradient with neon cyan/pink effects

## Typography

### Font Stack Hierarchy

#### Primary Display Font - Azonix

```css
font-family: "Azonix", Arial, sans-serif;
```

- **Usage**: Logo, main brand headlines, hero titles
- **Character**: Bold, futuristic, brand-focused
- **Best for**: H1 headlines, brand elements, call-to-action headers

#### Secondary Interface Font - Exo 2

```css
font-family: "Exo 2", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

- **Usage**: UI elements, subheadings, navigation, buttons
- **Character**: Modern, tech-forward, clean
- **Best for**: H2-H3 headings, interface text, feature titles

#### Body Font - Inter

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif;
```

- **Usage**: Body text, paragraphs, general content
- **Character**: Highly readable, neutral, professional
- **Best for**: Paragraphs, descriptions, documentation

#### Accent Font - Orbitron (Optional)

```css
font-family: "Orbitron", monospace;
```

- **Usage**: Special cyberpunk elements, tech callouts, stats
- **Character**: Futuristic, geometric, sci-fi
- **Best for**: Data displays, tech specs, cyberpunk theme elements

### Font Hierarchy

#### Brand Headlines (H1) - Azonix

- **Size**: 3.5rem (56px) desktop, 2.5rem (40px) mobile
- **Weight**: 700 (Bold)
- **Line Height**: 1.1
- **Font**: Azonix
- **Usage**: Main hero titles, brand statements

#### Major Headings (H2) - Exo 2

- **Size**: 2.25rem (36px) desktop, 1.875rem (30px) mobile
- **Weight**: 600 (Semi-bold)
- **Line Height**: 1.2
- **Font**: Exo 2
- **Usage**: Section headers, feature headlines

#### Section Headers (H3) - Exo 2

- **Size**: 1.5rem (24px)
- **Weight**: 500 (Medium)
- **Line Height**: 1.3
- **Font**: Exo 2
- **Usage**: Feature titles, card headers, navigation

#### Body Text - Inter

- **Size**: 1rem (16px)
- **Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Font**: Inter
- **Usage**: Paragraphs, descriptions, general content

#### Small Text - Inter

- **Size**: 0.875rem (14px)
- **Weight**: 400 (Regular)
- **Line Height**: 1.5
- **Font**: Inter
- **Usage**: Captions, footnotes, fine print

#### Tech/Data Elements - Orbitron

- **Size**: Variable
- **Weight**: 400-700
- **Line Height**: 1.4
- **Font**: Orbitron
- **Usage**: Statistics, data points, cyberpunk callouts

### Special Typography Effects

#### Cyberpunk Headers (Orbitron/Exo 2)

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

- **File**: `tradair-logo-horizontal-white-text-no-bg.png`
- **Usage**: Dark backgrounds, hero sections
- **Minimum Size**: 120px width

### Secondary Logo

- **File**: `tradair-logo-horizontal-black-text-no-bg.png`
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

- **Background**: Purple gradient (`#8B5CF6` to `#A855F7`)
- **Text**: White, 600 weight
- **Border Radius**: 8px
- **Padding**: 12px 24px
- **Hover**: Slight scale (1.05) + deeper shadow

#### Secondary Button

- **Background**: Transparent
- **Border**: 2px solid `#8B5CF6`
- **Text**: `#8B5CF6`, 600 weight
- **Border Radius**: 8px
- **Padding**: 10px 22px
- **Hover**: Fill with purple background

#### Cyberpunk Button

- **Background**: Black with neon border
- **Border**: 2px solid neon cyan/pink
- **Text**: Neon colored with glow effect
- **Animation**: Subtle pulsing glow

### Cards

- **Background**: White with subtle shadow
- **Border Radius**: 16px
- **Shadow**: `0 4px 20px rgba(139, 92, 246, 0.1)`
- **Padding**: 24px
- **Border**: Optional 1px solid `#E2E8F0`

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

- Use purple as the primary brand color across all touchpoints
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

- `illustrations/hero/` - Large hero section graphics (AI trading scenes, dashboards)
- `illustrations/backgrounds/` - Pattern overlays (circuits, gradients, neural grids)
- `illustrations/features/` - Feature showcase graphics (automation, risk management)

### Usage Guidelines

- **Hero sections**: Use `illustrations/hero/` for main landing areas
- **Feature highlights**: Use `illustrations/features/` for product capabilities
- **Data visualization**: Use `graphics/charts/` for performance metrics
- **Navigation/UI**: Use `icons/interface/` for interactive elements
- **Background elements**: Use `illustrations/backgrounds/` as subtle overlays
- **Technology emphasis**: Use `graphics/tech/` and `icons/ai/` for AI credibility
- **Trading context**: Use `icons/crypto/` for cryptocurrency relevance

All images follow the established color palette and maintain transparent backgrounds for flexible integration.

This style guide ensures consistent branding across all Tradair AI digital properties while maintaining the perfect balance between professional credibility and cutting-edge innovation that appeals to our target audience of day traders and AI enthusiasts.
