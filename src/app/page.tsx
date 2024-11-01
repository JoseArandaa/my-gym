import { ClientTestimonials } from "@/components/ClientTestimonials/ClientTestimonials";
import PricingCards from "@/components/PricingCards/PricingCards";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <section
        style={{ position: "relative", height: "450px", marginBottom: "2rem" }}
      >
        <Box
          sx={{
            backgroundColor: "#000",
            margin: "-1.5rem -2rem 2rem -2rem",
            backgroundImage:
              "url('https://sportclubnorcenter.com.ar/wp-content/uploads/SC-WEB-Banner-home.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            height: "100%",
            padding: "25px",
            display: "flex",
            alignItems: "center",
            WebkitBackgroundSize: "auto",
          }}
        >
          <Container maxWidth="md">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography color="white" variant="h6">
                Rutinas Adaptadas
              </Typography>
              <Typography color="white" variant="h2">
                Alcanza tu mejor Versión
              </Typography>
              <Typography variant="h4" sx={{ color: "#ff7733" }}>
                Sumate a miles de personas que mejoran día a día
              </Typography>
              <Box sx={{ display: "flex", maxWidth: "475px", gap: "20px" }}>
                <Button
                  variant="outlined"
                  sx={{ width: "45%", paddingY: "1rem" }}
                >
                  Acerca de Nosotros
                </Button>
                <Button
                  variant="contained"
                  sx={{ width: "55%", bgcolor: "#ff7733", color: "white" }}
                >
                  Quiero mejorar ya
                </Button>
              </Box>
            </Box>
          </Container>
          <Container
            sx={{ width: "10%", bgcolor: "transparent", padding: 0, margin: 0 }}
          ></Container>
        </Box>
      </section>
      <section
        style={{
          display: "flex",
          gap: "3%",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={3}>
          <PricingCards />
        </Grid>
        <Grid container>
          <ClientTestimonials />
        </Grid>
      </section>
    </>
  );
}
