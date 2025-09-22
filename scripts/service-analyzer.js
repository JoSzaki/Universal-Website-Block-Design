#!/usr/bin/env node

/**
 * Universal Service Analyzer
 * Automatically extracts services from website content to generate blog plan
 * Works with any professional service website
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');

class UniversalServiceAnalyzer {
  constructor() {
    this.services = [];
    this.locations = [];
    this.businessInfo = {};
    this.serviceCategories = [];
    this.detectedIndustry = null;
  }

  /**
   * Analyze local website content
   */
  analyzeLocalWebsite() {
    console.log('🔍 Analyzing local website content...');
    
    const sitePaths = [
      'index.html',
      'Home/index.html', 
      'Home/index-updated.html',
      'szolgaltatasok/index.html',
      'services/index.html',
      'about/index.html',
      'rolunk/index.html'
    ];

    let combinedContent = '';
    let foundFiles = [];

    for (const sitePath of sitePaths) {
      const fullPath = path.join(process.cwd(), sitePath);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        combinedContent += content + '\n';
        foundFiles.push(sitePath);
        console.log(`📄 Found: ${sitePath}`);
      }
    }

    if (foundFiles.length === 0) {
      console.log('❌ No website files found. Please ensure website content exists.');
      return null;
    }

    return this.parseWebsiteContent(combinedContent);
  }

  /**
   * Parse website content to extract services
   */
  parseWebsiteContent(htmlContent) {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    // Extract business info
    this.extractBusinessInfo(document);
    
    // Extract services
    this.extractServices(document);
    
    // Extract locations
    this.extractLocations(document);
    
    // Detect industry
    this.detectIndustry();
    
    // Categorize services
    this.categorizeServices();

    return this.generateAnalysisReport();
  }

  /**
   * Extract business information
   */
  extractBusinessInfo(document) {
    // Business name from title, h1, or meta
    const title = document.querySelector('title')?.textContent || '';
    const h1 = document.querySelector('h1')?.textContent || '';
    const metaDescription = document.querySelector('meta[name="description"]')?.content || '';

    this.businessInfo = {
      name: this.extractBusinessName(title, h1),
      description: metaDescription,
      title: title,
      mainHeading: h1
    };

    console.log(`🏢 Business: ${this.businessInfo.name}`);
  }

  /**
   * Extract business name from content
   */
  extractBusinessName(title, h1) {
    // Common patterns for business names
    const patterns = [
      /([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\s]+(?:Kft\.?|Bt\.?|Zrt\.?|Kkt\.?))/,
      /([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\s]+(?:Szolgáltatások|Megoldások|Szakértők?))/,
      /([A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű\s]+(?:Mester|Szakember|Vállalkozás))/,
    ];

    const content = `${title} ${h1}`;
    
    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (match) {
        return match[1].trim();
      }
    }

    // Fallback: first significant capitalized phrase
    const words = content.split(/\s+/).filter(w => w.length > 2);
    const capitalizedWords = words.filter(w => /^[A-ZÁÉÍÓÖŐÚÜŰ]/.test(w));
    
    if (capitalizedWords.length >= 2) {
      return capitalizedWords.slice(0, 2).join(' ');
    }

    return 'Vállalkozás';
  }

  /**
   * Extract services from content
   */
  extractServices(document) {
    console.log('🔧 Extracting services...');

    const serviceKeywords = [
      // General service indicators
      'szolgáltatás', 'service', 'munkák', 'works', 'vállal', 'kínál', 'biztosít',
      
      // Construction/Building
      'térkövezés', 'kőművesség', 'építés', 'felújítás', 'burkolás', 'támfal',
      'aszfaltoz', 'betonoz', 'vízelvezetés', 'lépcső', 'terasz', 'kerítés',
      
      // Automotive
      'szerviz', 'javítás', 'karbantartás', 'diagnosztika', 'műszaki', 'autó',
      'gumi', 'fék', 'motor', 'váltó', 'klíma', 'elektromos',
      
      // Landscaping/Gardening
      'kertész', 'kerttervezés', 'növény', 'fű', 'öntözés', 'metszés',
      'fenyő', 'virág', 'gyep', 'mulcs', 'komposzt',
      
      // Household Services
      'takarítás', 'költöztetés', 'szállítás', 'festés', 'mázolás', 'tapétázás',
      'villany', 'vízvezeték', 'fűtés', 'klíma', 'gáz',
      
      // IT Services
      'weboldal', 'website', 'fejlesztés', 'design', 'seo', 'hosting',
      'domain', 'email', 'backup', 'security', 'support',
      
      // Healthcare
      'orvos', 'vizsgálat', 'kezelés', 'terápia', 'diagnosztika',
      'fogász', 'implant', 'gyökér', 'korona', 'fehérítés',
      
      // Education
      'oktatás', 'tanítás', 'korrepet', 'nyelv', 'matematika',
      'angol', 'német', 'francia', 'felkészítés', 'vizsga'
    ];

    const serviceSelectors = [
      'h2', 'h3', 'h4', // Headings likely to contain services
      '.service', '.szolgaltatas', // Service-specific classes
      'li', // List items
      '.card', '.item', '.block' // Common content blocks
    ];

    const foundServices = new Set();

    // Search through different selectors
    for (const selector of serviceSelectors) {
      const elements = document.querySelectorAll(selector);
      
      elements.forEach(element => {
        const text = element.textContent.toLowerCase();
        
        // Check for service keywords
        for (const keyword of serviceKeywords) {
          if (text.includes(keyword)) {
            const cleanText = this.cleanServiceText(element.textContent);
            if (cleanText.length > 2 && cleanText.length < 100) {
              foundServices.add(cleanText);
            }
          }
        }
      });
    }

    this.services = Array.from(foundServices);
    console.log(`🎯 Found ${this.services.length} services:`, this.services);
  }

  /**
   * Clean service text
   */
  cleanServiceText(text) {
    return text
      .trim()
      .replace(/^[•\-\*\d\.\)]+\s*/, '') // Remove bullets and numbers
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/[^\w\sáéíóöőúüűÁÉÍÓÖŐÚÜŰ\-]/g, '') // Keep only letters, numbers, spaces, hyphens
      .trim();
  }

  /**
   * Extract locations from content
   */
  extractLocations(document) {
    console.log('🗺️ Extracting locations...');

    const locationKeywords = [
      // Budapest districts
      'I. kerület', 'II. kerület', 'III. kerület', 'IV. kerület', 'V. kerület',
      'VI. kerület', 'VII. kerület', 'VIII. kerület', 'IX. kerület', 'X. kerület',
      'XI. kerület', 'XII. kerület', 'XIII. kerület', 'XIV. kerület', 'XV. kerület',
      'XVI. kerület', 'XVII. kerület', 'XVIII. kerület', 'XIX. kerület', 'XX. kerület',
      'XXI. kerület', 'XXII. kerület', 'XXIII. kerület',
      
      // Major Hungarian cities
      'Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza',
      'Kecskemét', 'Székesfehérvár', 'Szombathely', 'Sopron', 'Tatabánya',
      
      // Pest county cities  
      'Szentendre', 'Budakeszi', 'Gödöllő', 'Dunakeszi', 'Vác', 'Cegléd',
      'Monor', 'Dabas', 'Pilisvörösvár', 'Budaörs', 'Érd', 'Szigetszentmiklós',
      
      // Counties
      'Pest megye', 'Bács-Kiskun megye', 'Baranya megye', 'Békés megye',
      'Borsod-Abaúj-Zemplén megye', 'Csongrád megye', 'Fejér megye'
    ];

    const content = document.body.textContent;
    const foundLocations = new Set();

    for (const location of locationKeywords) {
      if (content.includes(location)) {
        foundLocations.add(location);
      }
    }

    this.locations = Array.from(foundLocations);
    console.log(`📍 Found ${this.locations.length} locations:`, this.locations);
  }

  /**
   * Detect industry based on services
   */
  detectIndustry() {
    const industryKeywords = {
      'construction': [
        'térkövezés', 'kőművesség', 'építés', 'felújítás', 'burkolás', 'betonozás', 'támfal'
      ],
      'automotive': [
        'autó', 'szerviz', 'javítás', 'műszaki', 'gumi', 'fék', 'motor', 'diagnosztika'
      ],
      'landscaping': [
        'kertész', 'kerttervezés', 'növény', 'fű', 'öntözés', 'metszés', 'gyep'
      ],
      'household': [
        'takarítás', 'költöztetés', 'festés', 'villany', 'vízvezeték', 'fűtés'
      ],
      'it': [
        'weboldal', 'fejlesztés', 'design', 'seo', 'hosting', 'domain', 'support'
      ],
      'healthcare': [
        'orvos', 'vizsgálat', 'kezelés', 'terápia', 'fogász', 'implant'
      ],
      'education': [
        'oktatás', 'tanítás', 'korrepet', 'nyelv', 'matematika', 'felkészítés'
      ]
    };

    const serviceText = this.services.join(' ').toLowerCase();
    let maxMatches = 0;
    let detectedIndustry = 'general';

    for (const [industry, keywords] of Object.entries(industryKeywords)) {
      let matches = 0;
      for (const keyword of keywords) {
        if (serviceText.includes(keyword)) {
          matches++;
        }
      }
      
      if (matches > maxMatches) {
        maxMatches = matches;
        detectedIndustry = industry;
      }
    }

    this.detectedIndustry = detectedIndustry;
    console.log(`🏭 Detected industry: ${detectedIndustry} (${maxMatches} matches)`);
  }

  /**
   * Categorize services into groups
   */
  categorizeServices() {
    const categories = {
      primary: [],      // Main services
      secondary: [],    // Support services  
      maintenance: [],  // Ongoing/maintenance
      specialty: []     // Specialized/niche
    };

    const primaryKeywords = ['fő', 'alap', 'main', 'core', 'primary'];
    const maintenanceKeywords = ['karbantartás', 'javítás', 'tisztítás', 'maintenance'];
    const specialtyKeywords = ['speciális', 'egyedi', 'prémium', 'luxury', 'custom'];

    this.services.forEach(service => {
      const serviceText = service.toLowerCase();
      
      if (maintenanceKeywords.some(keyword => serviceText.includes(keyword))) {
        categories.maintenance.push(service);
      } else if (specialtyKeywords.some(keyword => serviceText.includes(keyword))) {
        categories.specialty.push(service);
      } else if (primaryKeywords.some(keyword => serviceText.includes(keyword))) {
        categories.primary.push(service);
      } else {
        // Default logic based on industry
        if (this.isLikelyPrimaryService(serviceText)) {
          categories.primary.push(service);
        } else {
          categories.secondary.push(service);
        }
      }
    });

    this.serviceCategories = categories;
    console.log('📊 Service categories:', {
      primary: categories.primary.length,
      secondary: categories.secondary.length, 
      maintenance: categories.maintenance.length,
      specialty: categories.specialty.length
    });
  }

  /**
   * Determine if service is likely primary based on industry
   */
  isLikelyPrimaryService(serviceText) {
    const primaryIndicators = {
      construction: ['térkövezés', 'építés', 'felújítás', 'kőművesség'],
      automotive: ['szerviz', 'javítás', 'diagnosztika', 'műszaki'],
      landscaping: ['kerttervezés', 'kertépítés', 'növényültetés'],
      household: ['takarítás', 'költöztetés', 'festés'],
      it: ['webfejlesztés', 'weboldal', 'design', 'seo'],
      healthcare: ['vizsgálat', 'kezelés', 'terápia'],
      education: ['oktatás', 'tanítás', 'korrepetálás']
    };

    const indicators = primaryIndicators[this.detectedIndustry] || [];
    return indicators.some(indicator => serviceText.includes(indicator));
  }

  /**
   * Generate comprehensive analysis report
   */
  generateAnalysisReport() {
    const report = {
      timestamp: new Date().toISOString(),
      businessInfo: this.businessInfo,
      detectedIndustry: this.detectedIndustry,
      services: {
        total: this.services.length,
        list: this.services,
        categories: this.serviceCategories
      },
      locations: {
        total: this.locations.length,
        list: this.locations
      },
      contentMatrix: this.generateContentMatrix(),
      recommendations: this.generateRecommendations()
    };

    return report;
  }

  /**
   * Generate service+location content matrix
   */
  generateContentMatrix() {
    const matrix = [];
    
    const primaryServices = this.serviceCategories.primary.length > 0 
      ? this.serviceCategories.primary 
      : this.services.slice(0, 5); // First 5 if no primary detected

    const primaryLocations = this.locations.slice(0, 10); // Top 10 locations

    for (const service of primaryServices) {
      for (const location of primaryLocations) {
        matrix.push({
          service: service,
          location: location,
          slug: this.generateSlug(`${service}-${location}`),
          priority: this.calculatePriority(service, location)
        });
      }
    }

    return matrix.sort((a, b) => b.priority - a.priority);
  }

  /**
   * Calculate priority for service+location combination
   */
  calculatePriority(service, location) {
    let priority = 50; // Base priority

    // Boost for primary services
    if (this.serviceCategories.primary.includes(service)) {
      priority += 30;
    }

    // Boost for Budapest locations
    if (location.includes('Budapest') || location.includes('kerület')) {
      priority += 20;
    }

    // Boost for major cities
    const majorCities = ['Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr'];
    if (majorCities.some(city => location.includes(city))) {
      priority += 15;
    }

    return priority;
  }

  /**
   * Generate slug from text
   */
  generateSlug(text) {
    return text
      .toLowerCase()
      .replace(/[áéíóöőúüű]/g, char => {
        const map = {'á':'a','é':'e','í':'i','ó':'o','ö':'o','ő':'o','ú':'u','ü':'u','ű':'u'};
        return map[char] || char;
      })
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  /**
   * Generate recommendations for content strategy
   */
  generateRecommendations() {
    const recommendations = [];

    // Service coverage recommendations
    if (this.services.length < 3) {
      recommendations.push({
        type: 'warning',
        title: 'Kevés szolgáltatás észlelve',
        description: 'Csak ' + this.services.length + ' szolgáltatást találtam. Ellenőrizd, hogy minden szolgáltatás fel van-e tüntetve a weboldalon.'
      });
    }

    // Location coverage recommendations  
    if (this.locations.length < 2) {
      recommendations.push({
        type: 'warning',
        title: 'Kevés helyszín észlelve',
        description: 'Csak ' + this.locations.length + ' helyszínt találtam. Add meg pontosan, hogy mely területeken dolgozol.'
      });
    }

    // Content volume recommendations
    const contentMatrix = this.generateContentMatrix();
    if (contentMatrix.length > 100) {
      recommendations.push({
        type: 'info',
        title: 'Nagy content lehetőség',
        description: `${contentMatrix.length} szolgáltatás+helyszín kombinációt találtam. Ez 1+ év blog tartalomra elegendő.`
      });
    }

    // Industry-specific recommendations
    recommendations.push({
      type: 'success',
      title: `${this.detectedIndustry} iparág felismerve`,
      description: `A rendszer automatikusan felismerte a szakmát. A blog tartalom erre lesz optimalizálva.`
    });

    return recommendations;
  }

  /**
   * Save analysis results
   */
  saveResults(report) {
    const outputDir = path.join(process.cwd(), 'blog');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Save full analysis
    const analysisPath = path.join(outputDir, 'service-analysis.json');
    fs.writeFileSync(analysisPath, JSON.stringify(report, null, 2));

    // Save content matrix for blog planning
    const matrixPath = path.join(outputDir, 'content-matrix.json');
    fs.writeFileSync(matrixPath, JSON.stringify(report.contentMatrix, null, 2));

    console.log(`✅ Analysis saved to:`);
    console.log(`📊 Full analysis: ${analysisPath}`);
    console.log(`📋 Content matrix: ${matrixPath}`);

    return { analysisPath, matrixPath };
  }

  /**
   * Main execution function
   */
  async run() {
    console.log('\n🚀 Universal Service Analyzer Starting...\n');

    try {
      const report = this.analyzeLocalWebsite();
      
      if (!report) {
        console.error('❌ Analysis failed - no content found');
        process.exit(1);
      }

      const paths = this.saveResults(report);

      // Print summary
      console.log('\n📊 ANALYSIS SUMMARY:');
      console.log('='.repeat(50));
      console.log(`🏢 Business: ${report.businessInfo.name}`);
      console.log(`🏭 Industry: ${report.detectedIndustry}`);
      console.log(`🔧 Services: ${report.services.total}`);
      console.log(`📍 Locations: ${report.locations.total}`);
      console.log(`📝 Content Opportunities: ${report.contentMatrix.length}`);

      console.log('\n🎯 TOP 10 CONTENT OPPORTUNITIES:');
      console.log('-'.repeat(50));
      report.contentMatrix.slice(0, 10).forEach((item, index) => {
        console.log(`${index + 1:2}. ${item.service} → ${item.location} (Priority: ${item.priority})`);
      });

      if (report.recommendations.length > 0) {
        console.log('\n💡 RECOMMENDATIONS:');
        console.log('-'.repeat(50));
        report.recommendations.forEach(rec => {
          const icon = rec.type === 'warning' ? '⚠️' : rec.type === 'success' ? '✅' : 'ℹ️';
          console.log(`${icon} ${rec.title}: ${rec.description}`);
        });
      }

      console.log('\n🎉 Analysis complete! Use the generated content matrix for blog planning.');
      
      return report;

    } catch (error) {
      console.error('❌ Error during analysis:', error.message);
      process.exit(1);
    }
  }
}

// Run if executed directly
if (require.main === module) {
  const analyzer = new UniversalServiceAnalyzer();
  analyzer.run().catch(error => {
    console.error('💥 Unhandled error:', error);
    process.exit(1);
  });
}

module.exports = UniversalServiceAnalyzer;