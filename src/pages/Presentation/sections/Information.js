// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// Images

function Information() {
  return (
    <MKBox component="section" py={2} my={4}>
      <Container>
        <Grid container item xs={11} spacing={4} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <TransparentBlogCard
              image="https://bit.ly/3HH2M6E"
              title="PATHLab mixes ML with Networking"
              description="If you've ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                color: "info",
                label: "Read More",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <TransparentBlogCard
              image="https://bit.ly/3HH2M6E"
              title="PATHLab mixes ML with Networking"
              description="If you've ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
              action={{
                color: "info",
                label: "Read More",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
