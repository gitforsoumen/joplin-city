System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.

# General guidelines

* Prioritize responsive layouts using auto layout, flexbox, and grid.
* Avoid unnecessary absolute positioning unless for decorative elements.
* Use semantic naming for layers and components.
* Keep design file size optimized for quick sharing and handoff.
* Group reusable components into clearly labeled sections.
* Follow Material Design principles for elevation, spacing, and interaction patterns.
* Ensure WCAG 2.1 AA compliance with minimum 4.5:1 contrast ratio.
* Touch targets must be at least 44px for accessibility.

--------------

# Joplin City Brand Guidelines

## Brand Identity

* **Tone**: Trustworthy, professional, community-focused, accessible
* **Design Style**: Modern Material Design with civic warmth
* **Visual Language**: Clean, elevated, vibrant yet professional

## Official Color System

### Primary Brand Palette
* **Brand Blue** (`#005B82`): Primary color for headers, CTAs, and key actions
* **Orange 800** (`#BF500B`): Alert accents, energy, and calls-to-action
* **Green 700** (`#83A226`): Community services, nature, sustainability
* **Gold 700** (`#D1B10E`): Achievement, excellence, highlights
* **White** (`#FFFFFF`): Base backgrounds, cards, clean space

### Supporting Gradients
Use these gradients for backgrounds, hero sections, and transitions:
* **Sunset Energy**: `#FF9857 → #BF500B` (use for energy/action)
* **Midwest Horizon**: `#005B82 → #48ADD9` (use for trust/stability)
* **Green Revival**: `#83A226 → #C9E53C` (use for community/environment)
* **Golden Legacy**: `#D1B10E → #F6DC55` (use for achievement/highlights)

### Greyscale Neutrals
* **Light** (`#EFEFEF`): Backgrounds, disabled states
* **Medium** (`#CCCCCC`): Borders, dividers
* **Dark** (`#333333`): Primary text, high-emphasis content

## Color Usage Rules
* Use Brand Blue (#005B82) as the primary action color
* Maintain 4.5:1 contrast ratio minimum for text
* Use gradients sparingly for hero sections and featured content
* Never place Brand Blue text on Brand Green background (poor contrast)
* Use white text on all brand colors except Gold (use Dark neutrals on Gold)

## Typography System

### Font Families
* **Primary**: Roboto (digital UI - headlines, subheads, body, captions)
* **Secondary**: Roboto Condensed (captions, labels, metadata)

### Roboto Font Weights
* Thin (100): Decorative use only, large sizes
* Light (300): Subheadings, secondary content
* Regular (400): Body copy, default text
* Medium (500): Subheadings, emphasis
* Bold (700): Headlines, primary emphasis

### Typography Hierarchy
* **H1**: Roboto Bold, 36pt, line-height 1.2, letter-spacing -0.02em
* **H2**: Roboto Medium, 24pt, line-height 1.3, letter-spacing -0.01em
* **H3**: Roboto Medium, 20pt, line-height 1.4
* **H4**: Roboto Medium, 18pt, line-height 1.4
* **H5**: Roboto Medium, 16pt, line-height 1.5
* **H6**: Roboto Medium, 14pt, line-height 1.5
* **Body**: Roboto Regular, 14pt, line-height 1.6
* **Caption**: Roboto Condensed, 10pt, line-height 1.4, uppercase, letter-spacing 0.02em

### Typography Rules
* Never use more than 2 font families in a single design
* Maintain clear hierarchy - limit to 3-4 heading sizes per page
* Ensure 14pt minimum for body text (accessibility)
* Use 44pt minimum line-height for touch targets in buttons

## Material Design Component Guidelines

### Buttons
* **Primary Button (Filled CTAs)**
  * Background: Brand color (#005B82, #BF500B, #83A226)
  * Text: White, Roboto Medium 14pt
  * Hover: Darken background by 15% (e.g., #005B82 → #004a6b)
  * Keep white text and icon color on hover
  * Border radius: 8px
  * Padding: 12px 24px
  * Elevation: elevation-2 on hover
  * Transition: 150ms ease-in-out
  * Min height: 44px (accessibility)

* **Outlined Button (Secondary Actions)**
  * Border: 2px Brand Blue (#005B82)
  * Text: Brand Blue, Roboto Medium 14pt
  * Background: White/Transparent
  * Hover: bg-gray-50 + text-[#7F7F7D] + subtle shadow
  * WCAG Compliant: 4.9:1 contrast ratio on hover
  * Transition: 150ms ease-in-out
  * Same padding and radius as primary

* **Text Button**
  * No background or border
  * Text: Brand Blue, Roboto Medium 14pt
  * Padding: 8px 16px
  * Underline on hover

* **Icon Buttons**
  * Min 44x44px touch target
  * Circular or 8px radius
  * Elevation-1, elevation-2 on hover

### Cards
* Background: White (#FFFFFF)
* Border radius: 12px
* Elevation: elevation-2 (default), elevation-3 on hover
* Padding: 24px
* Include clear hierarchy: icon/image → title → description → action
* Transition: 200ms cubic-bezier(0.4, 0, 0.2, 1)

### Forms & Inputs
* **Text Fields**
  * Background: #EFEFEF
  * Border: 1px solid #CCCCCC (focus: 2px Brand Blue)
  * Border radius: 8px
  * Padding: 12px 16px
  * Min height: 44px
  * Font: Roboto Regular 14pt
  * Use floating labels or clear placeholders
  * Show validation states with icons and color

* **Dropdowns/Selects**
  * Same styling as text fields
  * Chevron icon on right
  * Elevation-2 on dropdown menu

* **Checkboxes & Radio Buttons**
  * 20px minimum size
  * 2px border, Brand Blue when checked
  * Smooth transition (150ms)

* **Toggles/Switches**
  * 48x24px track
  * 20px thumb
  * Brand Blue when active

### Navigation
* **Top Navigation** (landing pages)
  * Height: 64-72px
  * Background: White
  * Elevation-1 or bottom border
  * Sticky on scroll
  * Logo left, menu right
  
* **Sidebar** (dashboards)
  * Width: 240-280px
  * Background: White or #EFEFEF
  * Group items into sections
  
* **Bottom Navigation** (mobile)
  * 4 items maximum
  * 56px height
  * Icons + labels
  * Elevation-3

### Icons
* Use consistent icon set (Material Icons or Lucide React)
* Sizes: 16px (small), 20px (default), 24px (large), 32px (extra large)
* Color: Inherit from context or use Brand Blue for emphasis

### Elevation System
* **Level 1**: Subtle separation (cards at rest)
* **Level 2**: Default cards, buttons
* **Level 3**: Raised cards, dropdowns, modals
* **Level 4**: Navigation drawers, dialogs
* **Level 5**: High-emphasis modals, alerts

## Material Design Spacing
* Use 4px base unit for spacing
* Common spacing: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
* Card padding: 24px
* Section padding: 48px (mobile), 64px (desktop)
* Component gaps: 16px (small), 24px (medium), 32px (large)

## Animation & Transitions
* **Duration**
  * Fast: 150ms (small changes, hovers)
  * Base: 200ms (default interactions)
  * Slow: 300ms (complex transitions, page changes)

* **Easing**
  * Standard: cubic-bezier(0.4, 0, 0.2, 1)
  * Deceleration: cubic-bezier(0, 0, 0.2, 1) (entering)
  * Acceleration: cubic-bezier(0.4, 0, 1, 1) (exiting)

* **Use Cases**
  * Button hover: elevation + color change (150ms)
  * Card hover: elevation change (200ms)
  * Section reveals: fade-in + slide-up (300ms)
  * Form validation: shake + color (200ms)
  * Page transitions: fade (200ms)

* **Ripple Effect**
  * Apply to buttons, cards, interactive elements
  * Use rgba(255, 255, 255, 0.5) on dark backgrounds
  * Use rgba(0, 91, 130, 0.2) on light backgrounds

## Accessibility
* Maintain minimum contrast ratio of 4.5:1 (WCAG 2.1 AA)
* Ensure touch targets are at least 44x44px
* Use alt text for all images and icons
* Support keyboard navigation
* Use semantic HTML
* Provide focus indicators (2px Brand Blue outline)
* Include skip navigation links
* Test with screen readers

## Date Format
* Always use "Jun 10" format for consistency

## Information Architecture
* Audit and restructure layouts for clarity and hierarchy
* Group related content into cards or sections
* Use Material Design elevation to show content layers
* Maintain visual consistency across all pages
* Ensure logical flow: header → hero → content → footer
