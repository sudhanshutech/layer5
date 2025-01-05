import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@mdx-js/react";

import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Link } from "gatsby";

import BookSinglePageWrapper from "./BookSingle.style.js";

const BookSingle = ({ data }) => {

  const { frontmatter, body } = data.mdx;
  return (
    <BookSinglePageWrapper>
      <div className="backBtn">
        <Link to="/learn/service-mesh-books">
          <IoIosArrowDropleftCircle />
          <h4>All Books</h4>
        </Link>
      </div>
      <PageHeader
        title={frontmatter.title}
      />
      <div className="single-post-wrapper">
        <Container>
          <div className="single-post-block">
            <MDXProvider components={useMDXComponents()}>
              {body}
            </MDXProvider>
          </div>
        </Container>
      </div>
    </BookSinglePageWrapper>
  );
};

export default BookSingle;
