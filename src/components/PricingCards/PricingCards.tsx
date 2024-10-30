"use client";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Stack,
  CircularProgress,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { onBuy } from "./onBuy";
import { useRouter } from "next/navigation";
import { useDolarApi } from "@/hooks/useDolarApi";
import { useState } from "react";
export default function PricingCards() {
  const [onBuyFetching, setOnBuyFetching] = useState(false);
  const tiers = [
    {
      name: "Starter Pack",
      price: 49,
      description: "Perfect for beginners",
      features: [
        "1 session per week",
        "Basic fitness assessment",
        "Personalized workout plan",
        "Email support",
      ],
    },
    {
      name: "Pro Pack",
      price: 99,
      description: "For dedicated fitness enthusiasts",
      features: [
        "2 sessions per week",
        "Advanced fitness assessment",
        "Customized nutrition plan",
        "24/7 chat support",
        "Progress tracking app",
      ],
    },
    {
      name: "Elite Pack",
      price: 199,
      description: "Comprehensive training experience",
      features: [
        "3 sessions per week",
        "Full body composition analysis",
        "Tailored meal prep service",
        "1-on-1 nutritionist consultation",
        "Priority scheduling",
        "Exclusive gym access",
      ],
    },
  ];

  const router = useRouter();
  const { data, loading, error } = useDolarApi();

  const handleBuy = async (tier) => {
    if (!data) {
      console.error("Dolar data is not available.");
      return;
    }
    setOnBuyFetching(true);
    try {
      const url = await onBuy(tier, data.venta);
      url && router.push(url);
    } catch (error) {
      console.error("Error during purchase:", error);
    } finally {
      setOnBuyFetching(false);
    }
  };

  if (loading)
    return (
      <Stack
        sx={{
          marginY: "10rem",
          justifyContent: "center !important",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CircularProgress size="4rem" />
      </Stack>
    );
  if (error) return <p>Error loading data: {error.message}</p>;
  return (
    <Stack spacing={4} sx={{ maxWidth: "lg", mx: "auto", py: 10 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Choose Your Training Package
      </Typography>
      <Grid container spacing={4}>
        {tiers.map((tier) => (
          <Grid item xs={12} md={4} key={tier.name}>
            <Card
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                padding: "20px",
                borderRadius: "15px",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div">
                  {tier.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {tier.description}
                </Typography>
                <Typography variant="h4" component="div" gutterBottom>
                  ${tier.price} <span style={{ fontSize: "1rem" }}>/month</span>
                </Typography>
                <Stack spacing={1}>
                  {tier.features.map((feature) => (
                    <Stack direction="row" alignItems="center" key={feature}>
                      <CheckIcon
                        color="success"
                        style={{ marginRight: "8px" }}
                      />
                      <Typography variant="body1">{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ pb: "1rem" }}>
                <Button
                  onClick={() => handleBuy(tier)}
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={onBuyFetching}
                  sx={{ borderRadius: "0.75rem", paddingY: ".5rem" }}
                >
                  Get Started
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
