import { useState } from "react";
import { ExploreMenu } from "../../components/ExploreMenu/ExploreMenu";
import { Header } from "../../components/Navbar/Header/Header";
import "./Home.css";
import { FoodDisplay } from "../../components/FoodDisplay/FoodDisplay";
import { AppDownload } from "../../components/AppDownload/AppDownload";

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};