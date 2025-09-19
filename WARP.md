# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Universal Block Design** is a block-based website template system designed for rapid development of professional websites across different industries. Currently focused on **ProStone Megoldások**, a Hungarian paving/masonry company, this system provides reusable UI blocks and components for creating complete web pages.

### Key Characteristics
- **Block-based architecture** with reusable components
- **Mobile-first responsive design** (768px breakpoint)
- **Inline CSS approach** for maximum portability
- **AI SEO optimized** content strategy
- **Hungarian language** primary content (térkövezési services)
- **No external dependencies** - pure HTML5/CSS3/Vanilla JS

## Architecture Overview

### High-Level Structure
```
universal-block-design/
├── Home/                    # ✅ COMPLETE - Main landing page
│   └── index-updated.html
├── services/                # ✅ COMPLETE - Services overview
│   └── index.html
├── blocks/                  # 📦 REUSABLE COMPONENT LIBRARY
│   ├── navigation/          # Header/menu blocks
│   ├── hero/               # Hero sections 
│   ├── content/            # Content blocks
│   ├── features/           # Feature/process blocks
│   ├── social-proof/       # Testimonials/stats
│   ├── contact/            # CTA/form blocks
│   └── portfolio/          # Gallery blocks
├── service-areas/          # 🚧 PLANNED - Geographic coverage
├── about/                  # 🚧 PLANNED - Company story
├── gallery/                # 🚧 PLANNED - Project showcase
├── contact/                # 🚧 PLANNED - Enhanced contact
├── pricing/                # 🚧 PLANNED - Pricing information
├── blog/                   # 🚧 PLANNED - AI SEO blog system
└── [support directories]   # Claude MCP configs, docs, etc.
```

### Design System Foundation
The project uses a consistent **universal design system** across all pages:

**Color Palette:**
```css
:root {
    --primary-blue: #1e40af;      /* Headers, branding */
    --secondary-blue: #3b82f6;    /* Accents */
    --accent-orange: #f97316;     /* CTAs, highlights */
    --success-green: #059669;     /* Success states */
    --neutral-gray: #6b7280;      /* Body text */
    --light-gray: #f8fafc;        /* Backgrounds */
    --dark-gray: #374151;         /* Dark elements */
}
```

**Typography Hierarchy:**
- **H1:** `clamp(36px, 5vw, 48px)` - font-weight: 700
- **H2:** `clamp(28px, 4vw, 32px)` - font-weight: 600, color: primary-blue  
- **H3:** `clamp(20px, 3vw, 24px)` - font-weight: 600
- **Body:** 18px - line-height: 1.7, color: #4b5563

**Layout Standards:**
- **Block padding:** 60px vertical
- **Internal gaps:** 40px between elements  
- **Small spacing:** 20px for tight elements
- **Container max-width:** 1200px
- **Grid systems:** CSS Grid with auto-fit minmax patterns

### Block-Based Architecture
Every page follows the same structural pattern:
```html
<!-- Universal Navigation Block -->
<header class="nav-header">...</header>

<!-- Hero Block (page-specific content) -->
<section class="hero">...</section>

<!-- Content Blocks (mix and match) -->
<section class="block">...</section>
<section class="block block-alt">...</section>
<section class="block">...</section>

<!-- Universal Footer Block -->
<footer class="footer">...</footer>
```

**Universal Block Types:**
1. **Navigation Block** - Sticky header with dropdown menus
2. **Hero Block** - Page intro with form/CTA
3. **Content Block** - Text + image combinations
4. **Process Block** - Step-by-step numbered guides  
5. **Features Block** - Grid of benefits/services
6. **Social Proof Block** - Testimonials and reviews
7. **Stats Block** - Numerical achievements
8. **Contact Block** - Forms and CTAs
9. **Gallery Block** - Interactive image galleries (expandable)
10. **Footer Block** - Links, contact info, credentials

## Development Commands

### Claude MCP Workflows
The project uses specialized Claude MCP (Model Context Protocol) configurations for different development tasks:

**PowerShell Environment:**
```powershell
# Source the aliases first
. .\.claude-aliases.ps1

# Available workflows:
ccresearch  # Research tools (Perplexity, Firecrawl, Exa, DataForSEO)
ccdev       # Development tools (Playwright, Magic, Apify, Ref) 
ccauto      # Automation tools (N8N, Context7, Apify)
ccbrowser   # Browser automation only (Playwright subset)
ccfull      # Research + Development combined
cchelp      # Show available workflows
```

**Bash Environment:**
```bash
# Source the aliases first
source .claude-aliases.sh

# Same commands available as PowerShell
```

### Static Site Development
Since this is a **static HTML/CSS/JS project**, there are no traditional build commands. Development is file-based:

**Adding New Pages:**
```bash
# 1. Create directory for new page
mkdir new-page-name

# 2. Copy design system from existing page
cp Home/index-updated.html new-page-name/index.html

# 3. Customize content while maintaining:
#    - Universal navigation structure
#    - Color system variables  
#    - Typography hierarchy
#    - Block-based layout
```

**Block Development Workflow:**
```bash
# 1. Navigate to blocks directory
cd blocks/[block-type]/

# 2. Create new block HTML file
# Template: block-name.html (self-contained with inline CSS)

# 3. Test block in isolation by opening in browser

# 4. Copy block code into target page(s)
```

**Testing Pages:**
```bash
# Simply open HTML files in browser - no build process needed
start Home/index-updated.html          # Windows
open Home/index-updated.html           # macOS  
xdg-open Home/index-updated.html       # Linux
```

## AI SEO Content Strategy

This project implements a sophisticated **AI SEO strategy** designed to dominate AI chatbot recommendations (ChatGPT, Perplexity, Gemini). 

### Content Generation Matrix
The blog system generates **500+ unique service+location combinations**:
- **Services (10):** Térkövezés, Kőművesség, Támfalak, Javítás, Vízelvezetés, etc.
- **Locations (50+):** Budapest I-XXIII kerületek + Pest megye városok
- **Result:** Every service × location combination gets dedicated content

### AI-Optimized Content Types
1. **Best Fit Briefs** - "Ki a legjobb [service] [location]ban?" format
2. **Top Reasons Series** - Numbered advantage lists for AI parsing
3. **Service+City Combinations** - Local SEO dominance  
4. **Comparison Tables** - Competitive analysis content
5. **Technical How-to Guides** - Expertise demonstration

### Content Guidelines
- **Third-person writing** (independent expert voice, not corporate marketing)
- **Conversational tone** (7th grade reading level)
- **Brief, structured responses** (AI prefers concise content)
- **Fact-based, objective approach**
- **Bottom-of-funnel buyer intent focus**

## Page Development Patterns

### Navigation Requirements
**MANDATORY:** Every new page must implement the **dropdown navigation system**:
- **Services dropdown:** Auto-generated from services data
- **Service areas dropdown:** Budapest districts + Pest county cities
- Consistent with existing pages' navigation structure

### Schema Markup Requirements  
**MANDATORY:** Every page requires JSON-LD schema:
- **LocalBusiness schema** (all pages)
- **FAQPage schema** (FAQ sections)  
- **Service schema** (service-related content)
- **Organization schema** (company info)
- **BlogPosting schema** (blog content)

### SEO Standards
- **Meta title format:** "[Service] [Location] - ProStone Szakértői Útmutató 2024"
- **Meta descriptions:** Include service, location, experience (25+ év)
- **H1 optimization:** Service + location + company positioning
- **FAQ sections:** 3-5 questions per page minimum

## Framework Compatibility

### Current State: Vanilla HTML/CSS/JS
- ✅ **Perfect for Astro** - Direct component conversion
- ✅ **Easy Next.js integration** - HTML to JSX conversion  
- ✅ **SvelteKit compatibility** - Direct usage in .svelte files
- ✅ **Any static site generator** - Self-contained blocks

### Migration Considerations
When converting to frameworks:
- **Preserve inline CSS approach** for portability
- **Maintain block isolation** - each block should be self-contained
- **Keep design system variables** - CSS custom properties
- **Preserve responsive breakpoints** - 768px mobile breakpoint

## Critical Development Guidelines

### Block Standards Checklist
When creating/modifying blocks:
- [ ] **Self-contained HTML** with inline CSS (no external dependencies)
- [ ] **Mobile-first responsive** design (768px breakpoint)
- [ ] **Semantic HTML5** elements for accessibility
- [ ] **Design system consistency** (colors, typography, spacing)
- [ ] **Performance optimized** (minimal CSS, optimized images)
- [ ] **Browser compatibility** (modern browsers, graceful degradation)

### Content Management
- **Hungarian language primary** - all user-facing content
- **ProStone branding consistency** - company name, colors, messaging
- **Local focus maintenance** - Budapest/Pest megye geographic scope
- **Industry-specific terminology** - térkövezés, kőművesség technical terms

### AI SEO Content Rules
When generating blog content:
- **Service+location combinations** - ensure every combination is covered
- **Structured data markup** - BlogPosting schema for all articles
- **Internal linking strategy** - cross-link related services/locations
- **Conversion optimization** - CTA placement in every article
- **Local expertise positioning** - highlight area-specific knowledge

## Special Considerations

### Multi-Agent Development Pattern
This project is designed for **parallel agent development**:
- **Agent 1:** Service Areas Page (HIGH priority)
- **Agent 2:** About Page (HIGH priority)  
- **Agent 3:** Gallery Page (MEDIUM priority)
- **Agent 4:** Enhanced Contact Page (HIGH priority)
- **Agent 5:** Pricing Page (MEDIUM priority)
- **Agent 6:** AI SEO Blog System (HIGH priority)

Each agent should maintain **design system consistency** and **cross-page integration**.

### MCP Tool Integration
Leverage specialized MCP tools for different tasks:
- **Research workflow** (`ccresearch`) - Market analysis, competitor research
- **Development workflow** (`ccdev`) - Browser testing, development tools
- **Automation workflow** (`ccauto`) - Content generation, workflow automation

### Performance Priorities
- **Page load speed < 3 seconds**
- **Mobile responsiveness** (all devices)  
- **SEO scores 90+** (Lighthouse)
- **Accessibility compliance** (WCAG guidelines)

## Success Metrics

### AI SEO Performance
- ChatGPT recommendation appearances
- Perplexity search result rankings  
- Google AI Overview features
- Local search ranking improvements

### Business Conversion
- Contact form submission rates
- Phone call conversion tracking
- Service inquiry quality improvement
- Lead-to-customer conversion optimization

---

This codebase represents a **next-generation approach** to local business websites, combining traditional web development with AI SEO optimization for maximum search visibility and conversion performance.