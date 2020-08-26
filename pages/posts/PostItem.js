import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import React from "react";
import Date from "./../../components/Date";
import Layout from "./../../components/Layout";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const PostItem = ({ data }) => {
  const classes = useStyles();
  if (!data) return null;
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="https://www.westerncape.gov.za/provincial-treasury/files/styles/small_5x3_crop/public/thumbnails/image/news.jpg?itok=j66TSH8T"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    <Date dateString={data.date}></Date>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Box m={4}>
          <div dangerouslySetInnerHTML={{ __html: data?.contentHtml }} />
        </Box>
      </div>
    </Layout>
  );
};

export default PostItem;
