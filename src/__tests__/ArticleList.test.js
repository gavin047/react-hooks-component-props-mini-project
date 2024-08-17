import React from "react";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

// Sample data for testing
const posts = [
  {
    title: "First Article",
    date: "August 1, 2024",
    preview: "This is a preview of the first article.",
  },
  {
    title: "Second Article",
    preview: "This is a preview of the second article.",
  },
  {
    title: "Third Article",
    preview: "This is a preview of the third article.",
  },
];

test("renders a <main> element", () => {
  const { container } = render(<ArticleList articles={posts} />);
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders an Article component for each post passed as a prop", () => {
  const { container } = render(<ArticleList articles={posts} />);
  expect(container.querySelector("main").children).toHaveLength(posts.length);
});