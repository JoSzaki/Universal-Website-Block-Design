#!/usr/bin/env node

/**
 * Automatic Blog Content Generator
 * Generates blog posts from GitHub Issues using Claude AI
 * URL Structure: blog/{slug}
 */

const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');
const fetch = require('node-fetch');
const yaml = require('yaml');
const slugify = require('slugify');

class BlogContentGenerator {
  constructor() {
    this.octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
    this.repository = process.env.GITHUB_REPOSITORY.split('/');
    this.owner = this.repository[0];
    this.repo = this.repository[1];
    this.maxPosts = parseInt(process.env.MAX_POSTS) || 2;
    this.anthropicApiKey = process.env.ANTHROPIC_API_KEY;
    
    if (!this.anthropicApiKey) {
      console.error('❌ ANTHROPIC_API_KEY environment variable is required');
      process.exit(1);
    }

    console.log(`🚀 Blog Generator initialized for ${this.owner}/${this.repo}`);
    console.log(`📊 Max posts per run: ${this.maxPosts}`);
  }

  /**
   * Parse Issue body to extract form data
   */
  parseIssueBody(body) {
    const lines = body.split('\n');
    const data = {};
    
    let currentSection = null;
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      // Skip empty lines and headers
      if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('_')) continue;
      
      // Parse form data
      if (trimmed.includes(':') && !trimmed.startsWith('- [')) {
        const [key, ...valueParts] = trimmed.split(':');
        const value = valueParts.join(':').trim();
        
        if (value && value !== '_No response_') {
          data[key.toLowerCase().replace(/\s+/g, '_')] = value;
        }
      }
    }
    
    return data;
  }

  /**
   * Generate slug from title
   */
  generateSlug(title) {
    return slugify(title, {
      lower: true,
      strict: true,
      locale: 'hu'
    });
  }

  /**
   * Get open blog generation issues
   */
  async getOpenIssues() {
    console.log('🔍 Fetching open blog generation issues...');
    
    try {
      const { data: issues } = await this.octokit.rest.issues.listForRepo({
        owner: this.owner,
        repo: this.repo,
        state: 'open',
        labels: 'blog:generate',
        per_page: this.maxPosts
      });

      console.log(`📋 Found ${issues.length} open issues`);
      return issues;
    } catch (error) {
      console.error('❌ Error fetching issues:', error.message);
      return [];
    }
  }

  /**
   * Call Claude AI API
   */
  async callClaude(prompt) {
    console.log('🤖 Calling Claude API...');
    
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.anthropicApiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 4000,
          messages: [{
            role: 'user',
            content: prompt
          }]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Claude API error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      return result.content[0].text;
    } catch (error) {
      console.error('❌ Claude API error:', error.message);
      throw error;
    }
  }

  /**
   * Generate comprehensive prompt for Claude
   */
  generatePrompt(issueData, title, slug) {
    const serviceKeywords = issueData.service_focus || 'térkövezés';
    const locationKeywords = issueData.location_focus || 'Budapest';
    const targetKeywords = issueData.target_keywords || `${serviceKeywords} ${locationKeywords}`;
    const contentLength = issueData.target_length || 'Medium (800-1200 words)';
    const category = issueData.category || 'Best-Fit Brief';

    return `
# PROFI BLOG CIKK GENERÁLÁS - HUNGARIAN SEO OPTIMIZED

## BRAND CONTEXT:
- **Cég:** ProStone Megoldások - Térkövezési és kőműves szakértők
- **Tapasztalat:** 25+ év Budapesten és Pest megyében  
- **Specialitás:** Minőségi térkövezés, támfalak, kőműves munkák
- **Brand Voice:** Szakértő, megbízható, helyi ismeretekkel rendelkező

## FELADAT:
Generálj **teljes HTML blog cikket** a következő specifikációk alapján:

**Cím:** ${title}
**URL Slug:** ${slug}
**Kategória:** ${category}
**Szolgáltatás:** ${serviceKeywords}
**Helyszín:** ${locationKeywords}
**Target Keywords:** ${targetKeywords}
**Hosszúság:** ${contentLength}

## HTML STRUKTÚRA KÖVETELMÉNYEK:

\`\`\`html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[60 KARAKTER MAX SEO TITLE]</title>
    <meta name="description" content="[160 KARAKTER MAX META DESCRIPTION]">
    
    <!-- JSON-LD Schema -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "[ARTICLE TITLE]",
        "description": "[ARTICLE DESCRIPTION]",
        "author": {
            "@type": "Organization",
            "name": "ProStone Megoldások"
        },
        "publisher": {
            "@type": "Organization", 
            "name": "ProStone Megoldások",
            "logo": {
                "@type": "ImageObject",
                "url": "https://domain.hu/images/prostone-logo.jpg"
            }
        },
        "datePublished": "[TODAY'S DATE]",
        "dateModified": "[TODAY'S DATE]",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://domain.hu/blog/${slug}"
        },
        "articleSection": "${category}",
        "about": {
            "@type": "Service",
            "name": "${serviceKeywords}",
            "areaServed": "${locationKeywords}"
        }
    }
    </script>
</head>
<body>
    <article class="blog-post">
        <header class="post-header">
            <h1>[MAIN TITLE H1]</h1>
            <div class="post-meta">
                <span class="date">[TODAY'S DATE FORMATTED]</span>
                <span class="category">${category}</span>
            </div>
        </header>

        <div class="post-content">
            [MAIN CONTENT WITH H2, H3 STRUCTURE]
        </div>

        <footer class="post-footer">
            <div class="cta-section">
                <h3>Készen áll a projektre?</h3>
                <p>Kérjen ingyenes árajánlatot tapasztalt szakértőinktől!</p>
                <div class="cta-buttons">
                    <a href="tel:+36301234567" class="cta-primary">📞 Hívjon Most</a>
                    <a href="/kapcsolat" class="cta-secondary">✉️ Kapcsolat</a>
                </div>
            </div>
        </footer>
    </article>
</body>
</html>
\`\`\`

## TARTALOM KÖVETELMÉNYEK:

1. **SEO OPTIMALIZÁCIÓ:**
   - Title tag: max 60 karakter
   - Meta description: 140-160 karakter
   - H1 tag egyedi és vonzó
   - H2-H3 hierarchia logikus
   - Target keywords természetes elhelyezése

2. **BELSŐ LINKEK (5-8 DB):**
   - /szolgaltatasok/terkovezés
   - /szolgaltatasok/komuvesseg  
   - /szolgaltatasok/tamfalak
   - /teruletek/budapest
   - /teruletek/pest-megye
   - /galeria
   - /arak
   - /kapcsolat

3. **BRAND VOICE:**
   - Szakértői, de érthető nyelv
   - 25+ év tapasztalat hangsúlyozása
   - Helyi ismeretek demonstrálása
   - Konkrét példák és referenciák
   - ProStone előnyök természetes említése

4. **SZERKEZETI ELEMEK:**
   - Bevezető bekezdés (hook + probléma)
   - 3-5 fő szekció H2 címekkel
   - Praktikus tanácsok és tippek
   - Helyi specialitások említése
   - Gyakori kérdések megválaszolása
   - Összefoglaló és következő lépések

5. **LOKÁLIS FOCUS:**
   - ${locationKeywords} specifikus információk
   - Helyi kihívások és megoldások
   - Területi engedélyek és előírások
   - Referencia projektek említése
   - Helyi versenytársak közvetett említése

## KIMENET:
Teljes, valid HTML5 dokumentum ami készen áll publikálásra a blog/${slug} URL-en.

FONTOS: A tartalomnak magyar nyelvűnek, SEO-optimalizáltnak és a ProStone brand voice-nak megfelelőnek kell lennie!
`;
  }

  /**
   * Create HTML file for blog post
   */
  async createBlogPost(content, slug) {
    const blogDir = path.join(process.cwd(), 'blog');
    
    // Create blog directory if it doesn't exist
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
      console.log('📁 Created blog directory');
    }

    // Write blog post file
    const filePath = path.join(blogDir, `${slug}.html`);
    fs.writeFileSync(filePath, content, 'utf8');
    
    console.log(`✅ Created blog post: blog/${slug}.html`);
    return filePath;
  }

  /**
   * Mark issue as processed
   */
  async markIssueAsProcessed(issueNumber) {
    try {
      await this.octokit.rest.issues.addLabels({
        owner: this.owner,
        repo: this.repo,
        issue_number: issueNumber,
        labels: ['processed']
      });

      await this.octokit.rest.issues.createComment({
        owner: this.owner,
        repo: this.repo,
        issue_number: issueNumber,
        body: '🤖 **Blog post generation started!**\n\nThis issue is being processed by the automatic content generator. The generated content will be available in a Pull Request shortly.\n\n⏳ Status: Processing...'
      });

      console.log(`✅ Marked issue #${issueNumber} as processed`);
    } catch (error) {
      console.error(`❌ Error marking issue #${issueNumber} as processed:`, error.message);
    }
  }

  /**
   * Process a single issue
   */
  async processIssue(issue) {
    console.log(`\n📝 Processing issue #${issue.number}: ${issue.title}`);
    
    try {
      // Parse issue data
      const issueData = this.parseIssueBody(issue.body);
      const title = issueData.blog_post_title || issue.title.replace('[BLOG]', '').trim();
      const providedSlug = issueData.url_slug;
      const slug = providedSlug || this.generateSlug(title);

      console.log(`📋 Title: ${title}`);
      console.log(`🔗 Slug: ${slug}`);

      // Check if blog post already exists
      const blogPath = path.join(process.cwd(), 'blog', `${slug}.html`);
      if (fs.existsSync(blogPath)) {
        console.log(`⚠️ Blog post already exists: blog/${slug}.html - Skipping`);
        return false;
      }

      // Mark issue as being processed
      await this.markIssueAsProcessed(issue.number);

      // Generate prompt and call Claude
      const prompt = this.generatePrompt(issueData, title, slug);
      const content = await this.callClaude(prompt);

      // Create blog post file
      await this.createBlogPost(content, slug);

      console.log(`✅ Successfully generated: blog/${slug}.html`);
      return true;

    } catch (error) {
      console.error(`❌ Error processing issue #${issue.number}:`, error.message);
      
      // Add error comment to issue
      try {
        await this.octokit.rest.issues.createComment({
          owner: this.owner,
          repo: this.repo,
          issue_number: issue.number,
          body: `❌ **Error generating blog post:**\n\n\`\`\`\n${error.message}\`\`\`\n\nPlease check the issue details and try again.`
        });
      } catch (commentError) {
        console.error('Error adding comment to issue:', commentError.message);
      }
      
      return false;
    }
  }

  /**
   * Main execution function
   */
  async run() {
    console.log('\n🚀 Starting blog content generation...');

    try {
      const issues = await this.getOpenIssues();

      if (issues.length === 0) {
        console.log('📭 No open blog generation issues found');
        return;
      }

      let processedCount = 0;
      const maxToProcess = Math.min(issues.length, this.maxPosts);

      for (let i = 0; i < maxToProcess; i++) {
        const issue = issues[i];
        const success = await this.processIssue(issue);
        
        if (success) {
          processedCount++;
        }

        // Rate limiting - small delay between API calls
        if (i < maxToProcess - 1) {
          console.log('⏳ Waiting 2 seconds before next generation...');
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      console.log(`\n✅ Blog generation completed!`);
      console.log(`📊 Processed: ${processedCount}/${maxToProcess} issues`);

      if (processedCount > 0) {
        console.log(`🔗 Generated files will be available at: blog/{slug}.html`);
      }

    } catch (error) {
      console.error('❌ Fatal error during blog generation:', error.message);
      process.exit(1);
    }
  }
}

// Run the generator
if (require.main === module) {
  const generator = new BlogContentGenerator();
  generator.run().catch(error => {
    console.error('💥 Unhandled error:', error);
    process.exit(1);
  });
}

module.exports = BlogContentGenerator;