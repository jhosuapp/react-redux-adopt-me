import { LoginView } from "@/app/(views)/login/ui/view/login.view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adopt me | Login",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function Login(){
  return <LoginView />;
}
