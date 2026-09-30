# TODO

- [ ] Optimize CSS cascade and inline styles
- [ ] Optimize llms.txt and schema markup

# ADDITIONAL CONTEXT

[Source](https://share.google/aimode/HAP6p8c6IiYMFz7M1)

While Schema Markup and llms.txt both help AI models understand your website, they serve completely different purposes. Schema Markup provides granular structured data for AI engines to extract specific facts and answers, whereas llms.txt is a high-level map that guides LLM crawlers to clean, markdown-formatted text for bulk training or context windows.
## Direct Comparison

| Feature | Schema Markup (JSON-LD) | llms.txt |
|---|---|---|
| Primary Purpose | Defines precise facts, entities, and relationships (e.g., prices, FAQs, authors). | Directs AI crawlers to clean, text-only documentation/content. |
| Target Audience | RAG systems, AI Overviews, search engines (Google, Perplexity, Bing). | Developer tools, LLM web-crawlers (Cursor, OpenAI, Anthropic). |
| Format | Strictly structured JSON-LD code within the page HTML. | A single, plain-text Markdown file located at /llms.txt. |
| Granularity | Highly detailed and specific to individual elements on a single page. | Broad and site-wide, serving as a directory of text files. |

------------------------------
## How They Work## 1. Schema Markup (The Deep Data)
Schema uses a standardized vocabulary (Schema.org) embedded inside your pages. AI models use it during Retrieval-Augmented Generation (RAG) to instantly pull accurate data points without having to interpret messy HTML paragraphs.

* Best for: Direct answers, factual lookup, and local or product search.
* Example: Specifying exactly who wrote an article, how much a product costs, or a precise FAQ answer.

## 2. llms.txt (The Reading List)
Introduced as a community standard, llms.txt is a single file placed in your website's root directory. It tells AI agents, "Don't waste tokens scraping my navigation menu and footer; instead, read these specific Markdown files for the cleanest version of my site."

* Best for: Coding libraries, extensive documentation, and complex knowledge bases.
* Example: Pointing an AI code assistant directly to a page explaining your API syntax.

## Should you use both?
Yes. They complement each other perfectly. Implement Schema Markup on your individual web pages so AI search engines can cite your specific facts, and create an llms.txt file to help AI development tools smoothly ingest your broader guides and documentation.
If you want to move forward with setting these up, tell me:

* Do you have a coding/documentation site, or is it a standard business website/blog?
* Would you like me to write a template for Schema Markup or a layout for your llms.txt file?


