import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";

function Features() {
  return (
    <MKBox component="section" py={2} my={4}>
      <Container>
        <Grid container item xs={11} spacing={4} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <TransparentBlogCard
              image="https://bit.ly/3HH2M6E"
              title="Project 1"
              description="Lorem ipsum dolor sit amet"
              action={{
                color: "info",
                label: "Read more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <TransparentBlogCard
              image="https://bit.ly/3HH2M6E"
              title="Project 2"
              description="Lorem ipsum dolor sit amet"
              action={{
                color: "info",
                label: "Read more",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <TransparentBlogCard
              image="https://bit.ly/3HH2M6E"
              title="Project 3"
              description="Lorem ipsum dolor sit amet"
              action={{
                color: "info",
                label: "Read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default Features;
