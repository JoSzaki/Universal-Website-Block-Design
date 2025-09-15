# Universal Block Design - Website Template System

## Project Overview

This project is focused on creating a **universal block-based website template system** that can be used to rapidly generate professional websites across different industries and use cases. The system uses reusable design blocks and components that can be mixed and matched to create complete web pages.

## Project Goals

- 🎯 **Create reusable design blocks** that work across different industries
- 🏗️ **Build a template wireframe system** for rapid website development  
- 📱 **Ensure responsive, mobile-first design** principles
- 🎨 **Maintain consistent visual hierarchy** and design patterns
- ⚡ **Enable quick customization** for different business types

## Current Project Structure

```
universal-block-design/
├── PROJECT.md (this file)
├── blocks/                 # Organized block library
│   ├── README.md          # Block documentation and usage guide
│   ├── navigation/        # Navigation and header blocks
│   ├── hero/             # Hero sections and banners  
│   ├── content/          # Content and information blocks
│   ├── features/         # Feature grids and benefit cards
│   ├── social-proof/     # Testimonials and trust indicators
│   ├── contact/          # Contact forms and CTA blocks
│   └── portfolio/        # Gallery and showcase blocks
│       └── gallery-block.html ✅
└── Home/
    ├── universal-design-prompt.md (prompt for generating home pages)
    └── index-updated.html (generated home page example - asphalt services)
```

## Design System Foundation

### Core Block Types Identified
Based on the Home page example, we've established these universal block patterns:

1. **Navigation Block**
   - Sticky header navigation
   - Logo + menu items + CTA button
   - Mobile hamburger menu

2. **Hero Block**
   - Split layout (60% content, 40% form/visual)
   - Company rating/credibility indicators
   - Primary headline + subtitle
   - CTA buttons (primary + secondary)

3. **Problem/Solution Block**
   - Content + visual split layout
   - Benefit list with checkmarks
   - Single CTA

4. **Process Steps Block**
   - Numbered step cards in grid
   - Hover effects and animations
   - Centered layout with description

5. **Technology/Features Block**
   - Reverse layout option
   - Technical specifications
   - Multiple sub-sections

6. **Benefits Grid Block**
   - Card-based layout
   - Icon + title + description
   - Hover animations

7. **Social Proof Block**
   - Testimonial cards
   - Author information with avatars
   - Grid layout for multiple testimonials

8. **Stats Block**
   - Numerical highlights
   - Compact presentation
   - High contrast background

9. **Contact/Conversion Block**
   - Split layout with benefits + form
   - Contact form with validation
   - Phone number prominence

10. **Footer Block**
    - Multi-column layout
    - Service links and contact info
    - Copyright and credentials

11. **Portfolio Gallery Block**
    - Interactive expanding image gallery
    - Hover effects with smooth transitions
    - Responsive design (desktop: horizontal, mobile: stacked)
    - Perfect for showcasing work samples or materials

### Design Principles

- **Typography Hierarchy**: H1 (36-48px) → H2 (28-32px) → H3 (20-24px) → P (18px)
- **Color System**: Primary blue, secondary blue, accent orange, success green, neutral grays
- **Spacing System**: 60px block padding, 40px internal gaps, 20px small spacing
- **Responsive Breakpoints**: 768px mobile breakpoint
- **Animation**: Subtle hover effects, fade-in animations on scroll

## Completed Pages

### ✅ Home Page
- **Status**: Complete
- **Industry**: Asphalt/Construction Services
- **Blocks Used**: All 10 core block types
- **Responsive**: Yes
- **Forms**: Header form + contact form
- **Language**: Hungarian

## Planned Pages

### 🚧 Upcoming Pages
- [ ] **Services Page** - Service detail layouts and pricing blocks
- [ ] **About Page** - Team, company story, and credential blocks  
- [ ] **Contact Page** - Enhanced contact forms and location blocks
- [ ] **Portfolio/Case Studies** - Project showcase and testimonial blocks
- [ ] **Blog/Resources** - Content listing and article layout blocks
- [ ] **Pricing** - Pricing table and comparison blocks

## Development Workflow

1. **Page Planning** - Define required blocks and layout
2. **Prompt Creation** - Create specific prompts for each page type
3. **HTML Generation** - Use prompts to generate initial HTML
4. **Block Extraction** - Identify reusable components
5. **Template Documentation** - Document block variations and usage

## Technical Specifications

### HTML Structure
- Semantic HTML5 elements
- Block-based architecture
- Inline CSS for portability
- Progressive enhancement

### CSS Framework
- Custom CSS using CSS Grid and Flexbox
- CSS Custom Properties (variables)
- Mobile-first responsive design
- Smooth animations and transitions

### JavaScript Features
- Mobile menu toggle
- Form handling and validation
- Smooth scrolling navigation
- Intersection Observer animations

## Next Steps

1. **Review Home page blocks** and extract reusable components
2. **Create Services page prompt** and generate content
3. **Build block library documentation** with code examples
4. **Establish naming conventions** for block classes and components

## Notes

- Template is designed to be industry-agnostic with easy content swapping
- Focus on conversion optimization and professional presentation
- All code should be self-contained (no external dependencies)
- Maintain accessibility standards throughout

---

**Last Updated**: 2025-09-12  
**Current Focus**: Home page complete, planning Services page development