"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

function Template(html: any) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Markdown({ children }: MarkdownProps) {
  const DOMParser = require("xmldom").DOMParser;
  const parse_html = children
    .replace(
      "r-vacancy_body_full_title",
      "text-[20px] leading-[1em] mt-[25px] mb-[5px]",
    )
    .replace(
      "r-vacancy_company",
      "text-[#999] mt-[11px] mb-[15px] leading-[1em]",
    );
  const parsedHtml = new DOMParser().parseFromString(parse_html, "text/html");
  return (
    <div dangerouslySetInnerHTML={{ __html: parsedHtml }} />
    // <ReactMarkdown
    //   className="space-y-3"
    //   components={{
    //     ul: (props) => <ul className="list-inside list-disc" {...props} />,
    //     a: (props) => (
    //       <a className="text-green-500 underline" target="_blank" {...props} />
    //     ),
    //   }}
    // >
    //   {children}
    // </ReactMarkdown>
  );
}
