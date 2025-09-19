# Claude Code Project Setup

This project is configured with specialized Claude Code workflows for different tasks.

## Quick Start

1. **Source the aliases file:**
   ```bash
   source .claude-aliases.sh
   ```

2. **Use workflow-specific commands:**
   - `ccresearch` - Research and investigation
   - `ccdev` - Development and coding
   - `ccauto` - Automation and workflows
   - `ccbrowser` - Browser automation only
   - `ccfull` - Research + Development combined

## Available Workflows

### 🔍 Research (`ccresearch`)
- **Perplexity** - AI-powered search and research
- **Firecrawl** - Web scraping and content extraction
- **Exa** - Search engine integration
- **DataForSEO** - SEO data and analysis

### 🛠️ Development (`ccdev`)
- **Playwright** - Browser automation and testing
- **Magic** - Universal development tools
- **Apify** - Web scraping actors
- **Ref** - Reference and documentation tools

### ⚡ Automation (`ccauto`)
- **N8N Workflows** - Workflow automation
- **N8N MCP** - N8N integration
- **Context7** - Context management
- **Apify** - Automation actors

## Configuration Files

- `.mcp-research.json` - Research workflow MCP servers
- `.mcp-dev.json` - Development workflow MCP servers
- `.mcp-automation.json` - Automation workflow MCP servers
- `.claude-aliases.sh` - Shell aliases for easy access

## Setup for New Projects

1. Copy these files to your new project:
   ```bash
   cp .mcp-*.json .claude-aliases.sh /path/to/new/project/
   ```

2. Update API keys in the `.mcp-*.json` files as needed

3. Source the aliases in your shell profile:
   ```bash
   echo "source ~/.claude-aliases.sh" >> ~/.bashrc
   # or for project-specific:
   source .claude-aliases.sh
   ```

## Tips

- Use `cchelp` to see available workflows
- Regular `claude` command will have no MCP servers (clean context)
- Combine configs with `--mcp-config file1.json --mcp-config file2.json`
- Use `--allowed-tools` to limit which tools are available