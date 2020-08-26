import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import React from "react";
import { getSortedPostsData } from "../../lib/posts";
import PostItem from "./PostItem";
import styles from "./styles.module.scss";

const Posts = ({ allPostsData }) => {
  return (
    <div>
      <h1>Posts Page</h1>
      <div className={styles.list}>
        <Grid container spacing={1}>
          {allPostsData.map((item, index) => (
            <Grid item md={4} key={`${item.id}-${index}`}>
              <Link href={`/posts/${item.id}`}>
                <a>
                  <PostItem data={item} />
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
      <Box component="div" mt={2}>
        <div>
          <Link href="/">
            <a>
              <Button variant="contained" color="primary">
                Back to home
              </Button>
            </a>
          </Link>
        </div>
      </Box>
    </div>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Posts;
