import { CustomerReviews,Footer,Hero,PopularProduct,Services,SpecialOffer,Subscribe,SuperQuality } from "./sections";
import Nav from './Components/Nav';

const App = () =>(
    <main className="relative">
      <Nav/>
      <section className="x1:padding-1
      wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProduct />
      </section><section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

    </main>
);

export default App;
