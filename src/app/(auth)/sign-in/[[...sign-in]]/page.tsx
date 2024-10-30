// pages/sign-in.js
import { SignIn } from "@clerk/nextjs";
import "../../style.css"; // Importa el CSS

export default function Page() {
  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <SignIn
          appearance={{
            elements: {
              card: "border-none", // Elimina el borde del componente de Clerk
            },
          }}
        />
      </div>
    </div>
  );
}
