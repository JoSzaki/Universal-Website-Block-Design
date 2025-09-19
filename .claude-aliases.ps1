# Claude Code workflow functions for PowerShell
# Source this file to enable the functions: . .\.claude-aliases.ps1

# Research workflow - for investigation, web scraping, search
function ccresearch { claude --mcp-config .mcp-research.json }

# Development workflow - for coding, testing, automation tools
function ccdev { claude --mcp-config .mcp-dev.json }

# Automation workflow - for n8n, workflows, context management
function ccauto { claude --mcp-config .mcp-automation.json }

# Browser automation focused (subset of dev tools)
function ccbrowser { claude --mcp-config .mcp-dev.json --allowed-tools "playwright*" }

# Combined research + development
function ccfull { claude --mcp-config .mcp-research.json --mcp-config .mcp-dev.json }

# Print available Claude workflows
function cchelp {
    Write-Host "Available Claude workflows:" -ForegroundColor Green
    Write-Host "  ccresearch  - Research tools (Perplexity, Firecrawl, Exa, DataForSEO)" -ForegroundColor Yellow
    Write-Host "  ccdev       - Development tools (Playwright, Magic, Apify, Ref)" -ForegroundColor Yellow
    Write-Host "  ccauto      - Automation tools (N8N, Context7, Apify)" -ForegroundColor Yellow
    Write-Host "  ccbrowser   - Browser automation only (Playwright)" -ForegroundColor Yellow
    Write-Host "  ccfull      - Research + Development combined" -ForegroundColor Yellow
    Write-Host "  cchelp      - Show this help" -ForegroundColor Yellow
}

Write-Host "Claude Code functions loaded! Type 'cchelp' to see available workflows." -ForegroundColor Green