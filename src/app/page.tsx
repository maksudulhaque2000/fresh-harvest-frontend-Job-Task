import About from "./components/home/About";
import Banner from "./components/home/Banner";
import Blog from "./components/home/Blog";
import CustomersFeedback from "./components/home/CustomersFeedback";
import FreshProducts from "./components/home/FreshProducts";
import SeasonalFruit from "./components/home/SeasonalFruit";




export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FreshProducts></FreshProducts>
      <About></About>
      <SeasonalFruit></SeasonalFruit>
      <CustomersFeedback></CustomersFeedback>
      <Blog></Blog>
    </div>
  );
}
