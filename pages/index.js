import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import WhatsUp from "../components/WhatsUp";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <ContainerBlock
      title="Nick Galante - Portfolio Site Home"
      description="Just some fun (or not who knows) things about me."
    >
      <Hero />
      <WhatsUp />
      <FavouriteProjects />
    </ContainerBlock>
  );
}
