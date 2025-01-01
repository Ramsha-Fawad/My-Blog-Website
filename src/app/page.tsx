import AuthorCard from "@/components/AuthorCard";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";

export default function Home() {
  return (
    <div>
      <Feature />
      <Mega />
      <AuthorCard />
      <Footer />
    </div>
  );
}
