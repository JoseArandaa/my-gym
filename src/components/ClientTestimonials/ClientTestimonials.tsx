import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Fitness Enthusiast",
    testimonial:
      "Working with this personal trainer has transformed my life. I've never felt stronger or more confident!",
  },
  {
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Marathon Runner",
    testimonial:
      "The customized training plan helped me shave 10 minutes off my marathon time. Incredible results!",
  },
  {
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Busy Professional",
    testimonial:
      "Despite my hectic schedule, my trainer helped me achieve my fitness goals. The flexibility and support are unmatched.",
  },
  {
    name: "David Kim",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Weight Loss Journey",
    testimonial:
      "I've lost 50 pounds and gained a new lease on life. The nutrition guidance was just as valuable as the workouts.",
  },
];

export function ClientTestimonials() {
  return (
    <Paper
      sx={{
        margin: "0 -2rem",
        padding: "2rem",
        pb: "5rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
        What Our Clients Say
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} lg={3} key={index} sx={{ display: "flex" }}>
            <Card
              elevation={6}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <CardContent
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <div>
                    <Typography variant="h6">{testimonial.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </div>
                </Stack>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontStyle="italic"
                  sx={{ mt: "1.5rem" }} // Empujar el texto hacia abajo si es necesario
                >
                  {`"${testimonial.testimonial}"`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
