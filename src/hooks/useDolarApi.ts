"use client";
import { useEffect, useState } from "react";

interface DolarData {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

export const useDolarApi = () => {
  const [data, setData] = useState<DolarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const apiUrl = "https://dolarapi.com/v1/dolares/blue";

  useEffect(() => {
    const fetchDolarData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDolarData();
  }, []);

  return { data, loading, error };
};
