#!/bin/bash

# Claude Code workflow aliases
# Source this file to enable the aliases: source .claude-aliases.sh

# Research workflow - for investigation, web scraping, search
alias ccresearch='claude --mcp-config .mcp-research.json'

# Development workflow - for coding, testing, automation tools
alias ccdev='claude --mcp-config .mcp-dev.json'

# Automation workflow - for n8n, workflows, context management
alias ccauto='claude --mcp-config .mcp-automation.json'

# Browser automation focused (subset of dev tools)
alias ccbrowser='claude --mcp-config .mcp-dev.json --allowed-tools "playwright*"'

# Combined research + development
alias ccfull='claude --mcp-config .mcp-research.json --mcp-config .mcp-dev.json'

# Print available Claude workflows
alias cchelp='echo "Available Claude workflows:
  ccresearch  - Research tools (Perplexity, Firecrawl, Exa, DataForSEO)
  ccdev       - Development tools (Playwright, Magic, Apify, Ref)
  ccauto      - Automation tools (N8N, Context7, Apify)
  ccbrowser   - Browser automation only (Playwright)
  ccfull      - Research + Development combined
  cchelp      - Show this help"'

echo "Claude Code aliases loaded! Type 'cchelp' to see available workflows."