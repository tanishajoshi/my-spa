// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import flavio from "assets/images/flavio.png";
import alessio from "assets/images/alessio.jpg";
import prince from "assets/images/prince.jpg";
import andy from "assets/images/andy.jpg";
import tanisha from "assets/images/tanisha.jpg";
import sai from "assets/images/saishreyas.jpg";
import lorenzo from "assets/images/lorenzo.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The PATH Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Meet the team
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={flavio}
                name="Flavio Esposito, PhD"
                position={{ color: "info", label: "Professor, Computer Science" }}
                description="Lorem ipsum dolor sit amet"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={alessio}
                name="Alessio Sacco"
                position={{ color: "info", label: "Graduate Student" }}
                description="Lorem ipsum dolor sit amet"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={prince}
                name="Princewill Okorie"
                position={{ color: "info", label: "Graduate Student" }}
                description="Lorem ipsum dolor sit amet"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={andy}
                name="Andy Florian Irakoze"
                position={{ color: "info", label: "Undergraduate Student" }}
                description="Lorem ipsum dolor sit amet"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={tanisha}
                name="Tanisha Joshi"
                position={{ color: "info", label: "Underaduate Student" }}
                description="Lorem ipsum dolor sit amet"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={lorenzo}
                name="Lorenzo Pappone"
                position={{ color: "info", label: "Graduate Student" }}
                description="Lorem ipsum dolor sit amet"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={sai}
                name="Sai Shreyas Bhanavasi"
                position={{ color: "info", label: "Graduate Student" }}
                description="Lorem ipsum dolor sit amet"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
