# Case Study Image Requirements

This document outlines the images needed for the case study cards on your website.

## Image Specifications

- **Format**: JPG or PNG
- **Dimensions**: 800x600 pixels (4:3 aspect ratio)
- **File Size**: Optimized, ideally under 200KB each
- **Style**: Professional, business-focused images related to AI/automation

## Required Images

All images should be placed in the `public/images/` directory:

### 1. case-study-small-business.jpg
**Topic**: Small Business AI Automation
**Suggested Content**: 
- Small business office with technology
- Entrepreneur working with AI tools
- Modern small business workspace
**Search Terms**: "small business automation", "entrepreneur technology", "small office AI"

### 2. case-study-nocode-ai.jpg
**Topic**: No-Code AI Tools
**Suggested Content**:
- Visual workflow builder interface
- Drag-and-drop automation platform
- No-code development environment
**Search Terms**: "no-code platform", "visual workflow", "drag and drop automation"

### 3. case-study-ai-tools.jpg
**Topic**: AI Tools and Growth
**Suggested Content**:
- Business growth charts with AI elements
- Modern AI dashboard
- Technology growth concept
**Search Terms**: "AI business growth", "technology dashboard", "business analytics AI"

### 4. case-study-sme-ai.jpg
**Topic**: SME AI Implementation
**Suggested Content**:
- Medium-sized business operations
- Team using AI technology
- Professional office with AI systems
**Search Terms**: "SME technology", "business AI implementation", "enterprise automation"

### 5. case-study-workflow.jpg
**Topic**: Workflow Automation
**Suggested Content**:
- Flowchart or workflow diagram
- Automated process visualization
- Connected systems illustration
**Search Terms**: "workflow automation", "process automation", "business workflow"

### 6. case-study-enterprise.jpg
**Topic**: Enterprise Automation
**Suggested Content**:
- Large corporate office
- Enterprise technology infrastructure
- Data center or server room
**Search Terms**: "enterprise automation", "corporate technology", "business efficiency"

### 7. case-study-genai.jpg
**Topic**: Generative AI Use Cases
**Suggested Content**:
- AI neural network visualization
- Generative AI concept art
- Modern AI technology
**Search Terms**: "generative AI", "AI neural network", "artificial intelligence technology"

### 8. case-study-mining.jpg
**Topic**: Mining Industry Automation
**Suggested Content**:
- Modern mining operations
- Industrial automation equipment
- Mining technology systems
**Search Terms**: "mining automation", "industrial IoT", "smart mining"

### 9. case-study-lam.jpg
**Topic**: Large Action Models (LAMs)
**Suggested Content**:
- Advanced AI systems
- Machine learning visualization
- Cutting-edge technology
**Search Terms**: "machine learning", "AI technology", "advanced automation"

### 10. case-study-healthcare.jpg
**Topic**: Healthcare Document Processing
**Suggested Content**:
- Healthcare technology
- Medical records digitization
- Healthcare professional with tablet
**Search Terms**: "healthcare technology", "medical automation", "digital health records"

## Free Stock Photo Resources

You can find appropriate images from these sources:

1. **Unsplash** (unsplash.com)
   - Free high-quality images
   - No attribution required
   - Search: business, technology, AI, automation

2. **Pexels** (pexels.com)
   - Free stock photos
   - Great for business imagery
   - Search: office, technology, business automation

3. **Pixabay** (pixabay.com)
   - Free images and illustrations
   - Good for technology concepts
   - Search: artificial intelligence, automation, business

4. **StockSnap.io** (stocksnap.io)
   - Free stock photography
   - Business and technology focus
   - Search: AI, machine learning, business tech

## Fallback Option

If you don't have time to source images immediately, you can use a placeholder service temporarily:

- Place this URL format in the image path: `https://placehold.co/800x600/1a1a2e/16a34a?text=Case+Study`
- Replace the text parameter with relevant keywords for each study

Example:
```javascript
image: 'https://placehold.co/800x600/1a1a2e/16a34a?text=AI+Automation'
```

## Next Steps

1. Download or create 10 images matching the descriptions above
2. Optimize images for web (compress to reduce file size)
3. Save them in `public/images/` directory with the exact filenames listed
4. Images will automatically appear on the website

## Note

The CaseStudyCard component will display these images at the top of each card. If an image is missing, the card will still display but may show a broken image icon until the proper image is added.
