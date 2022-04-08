// react-router-dom components
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import MKPagination from "components/MKPagination";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";
import Icon from "@mui/material/Icon";

function DesignBlocks() {
  const renderData = data.map(({ items }) => (
    <Grid container spacing={3} sx={{ mx: 6 }} key={items}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {items.map(({ name, date }) => (
            <Grid item xs={10} alignContent="center" sx={{ mb: 2 }} key={name}>
              <ExampleCard name={name} date={date} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox component="section" my={4} py={2}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Newsfeed"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            PATH Newsfeed
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Regularly updated with the latest news from PATH.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 2 }}>{renderData}</Container>
      <Container sx={{ mt: 2 }}>
        <MKPagination size="large">
          <MKPagination item>
            <Icon>keyboard_arrow_left</Icon>
          </MKPagination>
          <MKPagination item active>
            1
          </MKPagination>
          <MKPagination item>2</MKPagination>
          <MKPagination item>3</MKPagination>
          <MKPagination item>
            <Icon>keyboard_arrow_right</Icon>
          </MKPagination>
        </MKPagination>
      </Container>
    </MKBox>
  );
}
export default DesignBlocks;
