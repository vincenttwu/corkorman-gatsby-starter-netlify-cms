import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PortfolioPagePreview from './preview-templates/PortfolioPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('portfolios', PortfolioPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
