import { Metadata } from "next";
import NewJobForm from "./NewJobForm";

export const metadata: Metadata = {
  title: "Page | Yakutia Jobs",
};

export default function Page() {
  return <NewJobForm />;
}
