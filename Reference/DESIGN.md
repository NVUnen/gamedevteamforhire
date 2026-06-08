---
name: The Syndicate
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e1bfb5'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#a88a81'
  outline-variant: '#59413a'
  surface-tint: '#ffb59d'
  primary: '#ffb59d'
  on-primary: '#5d1800'
  primary-container: '#f26330'
  on-primary-container: '#521400'
  inverse-primary: '#ac3400'
  secondary: '#dcb8ff'
  on-secondary: '#480081'
  secondary-container: '#7701d0'
  on-secondary-container: '#dcb7ff'
  tertiary: '#96ccff'
  on-tertiary: '#003353'
  tertiary-container: '#2997e2'
  on-tertiary-container: '#002c48'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59d'
  on-primary-fixed: '#390b00'
  on-primary-fixed-variant: '#842600'
  secondary-fixed: '#efdbff'
  secondary-fixed-dim: '#dcb8ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6700b5'
  tertiary-fixed: '#cee5ff'
  tertiary-fixed-dim: '#96ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004a75'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  surface-muted: '#141416'
  surface-raised: '#1D1D21'
  text-primary: '#F3F4F6'
  text-muted: '#9CA3AF'
  amber-hover: '#C84315'
  violet-hover: '#6A0DAD'
  panel-overlay: rgba(0, 0, 0, 0.85)
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.15em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  headline-sm:
    fontFamily: Bebas Neue
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  subheading:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.2em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.75'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.25em
  mono-technical:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-base: 4px
  gap-xs: 4px
  gap-sm: 8px
  gap-md: 16px
  gap-lg: 24px
  section-macro-desktop: 140px
  section-macro-mobile: 64px
  max-width: 1280px
---

## Brand & Style

This design system embodies a **AAA-game aesthetic**, drawing inspiration from high-fidelity tactical shooters and prestige development studio interfaces. The brand personality is **Tactical, Authoritative, and Immersive**, positioning itself as a high-stakes environment for technical excellence.

The visual direction follows a **Modern Industrial / Cinematic** style. It rejects the softness of consumer web trends in favor of "hard" aesthetics. The core philosophy—the **Opaque Slab Strategy**—utilizes heavy, high-density panels, matte charcoal surfaces, and localized "tactical illumination" to create depth without relying on transparency or glassmorphism. The goal is to evoke the feeling of a mission-critical command deck or a high-end game engine editor.

## Colors

The palette is anchored by "Absolute Shadow" (#0B0B0C), providing a deep, non-reflective base. Hierarchy is established through incremental tonal shifts in the neutral scale rather than transparency.

- **Primary (Tactical Amber):** Reserved for high-priority actions, critical system statuses, and interactive focal points.
- **Secondary (Void Violet):** Used for metadata, secondary technical categories, and "energy" accents.
- **Atmospheric Lighting:** Use subtle radial gradients (3-4% opacity) of the accent colors in the background to simulate "backlight blooms" behind primary content slabs.
- **Edge Lighting:** Components should use a `1px` top border with `rgba(255, 255, 255, 0.1)` to mimic top-down engine lighting.

## Typography

Typography is the primary driver of the system's cinematic feel. 

- **Headers:** Utilize **Bebas Neue** in uppercase with generous tracking. This creates a condensed, impactful look common in film titles and technical dossiers.
- **Body:** **Inter** provides high legibility for technical descriptions and paragraphs. Use a generous line height (1.6+) to maintain readability against dark backgrounds.
- **Mechanical Metadata:** For technical labels (e.g., `SYS_VERSION // 4.0`), use the `label-caps` or `mono-technical` styles. Always pair these with a double forward slash `//` for a command-line aesthetic.

## Layout & Spacing

The layout is built on a rigid **Fixed Grid** system that emphasizes structural integrity. 

- **Macro Layout:** Use a 12-column grid for desktop with 24px gutters. Sections should be separated by aggressive whitespace (`140px`) to provide a high-production, cinematic pacing.
- **Micro Layout:** Components follow a 4px/8px internal rhythm. Elements should feel "locked" into the grid.
- **Responsive Behavior:** 
  - **Desktop (1280px+):** Full 12-column span, max width fixed.
  - **Tablet (768px-1279px):** 2-column dynamic cards. 
  - **Mobile (<767px):** Single column stack with 16px horizontal margins.

## Elevation & Depth

Depth in this system is conveyed through **Tonal Layering** and **Tactical Glows** rather than traditional soft shadows.

- **Surface Tiers:** 
  - `Base`: Absolute Shadow (#0B0B0C).
  - `Surface`: Muted charcoal (#141416) for cards and primary panels.
  - `Overlay`: Elevated inputs and pop-overs use #1D1D21.
- **Tactical Shadow:** Use heavy, high-opacity shadows for structural separation: `0 10px 30px -10px rgba(0, 0, 0, 0.85)`.
- **Glow Effects:** Primary interactive elements (Amber) and special metadata (Violet) utilize a soft, 20% opacity outer glow of their respective hex code to simulate light emission.
- **Scanlines:** A global CSS overlay of subtle horizontal lines (1px) at 1.5% opacity should be applied to the background to reinforce the "monitor" aesthetic.

## Shapes

The design system is strictly **anti-round**. All shapes are defined by rigid, geometric precision to maintain an industrial feel. 

- **Tactical Radius (4px):** Used for buttons, input fields, and small badges.
- **Standard Radius (8px):** Used for content cards and secondary panels.
- **Structural Radius (12px):** Reserved only for the largest hero containers or modal wrappers.
- **Borders:** Use 1px solid borders for all components. Default border opacity should be low (7%), increasing to 25% for active or hovered states using the primary color.

## Components

### Buttons
- **Primary:** Background #E05624, text #060607 (Dark), uppercase Bebas Neue. On hover, apply a "Glint" animation (a white light-wipe at 45 degrees).
- **Tactical:** Ghost buttons with #1D1D21 borders and #F3F4F6 text. 4px corners.

### Cards & Panels
- **Slab Style:** Matte #141416 background, 8px radius, 1px top-edge highlight.
- **Content:** Images within cards should be desaturated (grayscale) by default, returning to full color on hover with a 500ms transition.

### Input Fields
- **Style:** Background #1D1D21, bottom-border accent in Amber (#E05624) when focused. 
- **Typography:** Use `mono-technical` for placeholder text to suggest a terminal input.

### Tactical Chips
- **Format:** Rectangular with 4px corners. Use Violet (#8A2BE2) for metadata tags. Text should always be uppercase `label-caps`.

### Checkboxes & Radios
- **Design:** Rigid squares (checkboxes) and diamonds (radios). No circles. Use the Primary Amber for the "active" fill state.

### Technical Metadata
- **Status Tags:** Include a "pulsing" dot next to status text (e.g., `• SYS_ACTIVE`). The dot should use the primary accent color with a soft glow.