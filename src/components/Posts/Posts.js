import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { posts } from "./dummy-posts";
import React from "react";
const Posts = () => {
  return (
    <div style={{ marginTop: 20, padding: 30 }}>
      <Grid container spacing={5} justify="center">
        {posts.map(({ title, excerpt, image }) => (
          <Grid item key={title}>
            <Card className="Post-card">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={excerpt}
                  image={image}
                  title={excerpt}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <Typography component="p">{excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
