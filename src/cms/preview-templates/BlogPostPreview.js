import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    content={widgetFor("body")}
    title={entry.getIn(["data", "title"])}
    description={entry.getIn(["data", "description"])}
    image={entry.getIn(["data", "image"])}
    category={entry.getIn(["data", "category"])}
    tags={entry.getIn(["data", "tags"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
