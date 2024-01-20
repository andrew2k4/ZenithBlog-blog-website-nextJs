import Head from "next/head";
import Image from "next/image";
import React from "react";

export const BlogCard = () => {
  return (
    <div>
      <p>name . date</p>
      <div>
        <p>Titre</p>
        <div>icon</div>
      </div>

      <p>description</p>
      <div>
        <p>Design</p>
        <p>Research</p>
        <p>Presentation</p>
      </div>
    </div>
  );
};
