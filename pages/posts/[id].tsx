import Box from "@material-ui/core/Box";
import React from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/Layout";
import PostItem from "./PostItem";
import { GetStaticPaths, GetStaticProps } from "next";

const Post = ({ data }) => {
  return (
    <Layout>
      <Box component="div" mt={2}>
        <PostItem data={data} />
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      data: postData,
    },
  };
};

export default Post;
