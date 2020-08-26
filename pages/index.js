import Head from "next/head";
import Link from "next/link";
import Layout from "./../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    margin: 16,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function Home() {
  const classes = useStyles();

  React.useEffect(() => {
    console.log("1: ", process.env.NEXT_PUBLIC_ENVIRONMENT);
    console.log("2: ", process.env.NEXT_PUBLIC_ENV_VARIABLE);
  }, []);

  return (
    <Layout home>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={classes.container}>
        <h1>Testing</h1>
        <div>
          <Avatar
            alt="Remy Sharp"
            src="https://c7.uihere.com/files/340/946/334/avatar-user-computer-icons-software-developer-avatar.jpg"
            className={classes.large}
          />
          <Typography variant="h5" component="h5">
            Enter your name
          </Typography>
          <section>
            <Typography variant="body2" component="div">
              Lorem is pum.....
            </Typography>
          </section>
        </div>
        <hr />
        <div>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </div>
        <div>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
