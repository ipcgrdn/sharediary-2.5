import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Footer from "./_components/footer";

export default function MarketingPage() {
  return (
    <div className="h-full w-full">
      <div
        className="bg-cover bg-center h-full w-full"
        style={{
          backgroundImage: "url('/watercolor.png')",
        }}
      >
        <div className="h-full w-full flex items-center justify-center text-center flex-1 px-44">
          <Heading />
          <Heroes />
        </div>
      </div>
      <Footer />
    </div>
  );
}
