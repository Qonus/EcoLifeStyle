import GreenButton from "../components/GreenButton";

export default function ReduceReuseRecycle() {
  return (
    <>
      <div className="advices-main">
        <h1 className="main-title">Reduce, Reuse, and Recycle</h1>
        <img src="src/assets/recycle.jpg" alt="" />
        <p>
          Reduce, reuse, and recycle are three essential concepts that form the
          foundation of sustainable living. They are commonly referred to as the
          "three Rs" and are aimed at reducing the amount of waste we produce
          and ultimately protect the environment. Each of these concepts plays a
          crucial role in our efforts to live sustainably.
          <br />
          <br />
          Reduce refers to the reduction of our consumption of resources and
          products, which in turn reduces the amount of waste we produce. We can
          reduce our consumption by making conscious choices, such as buying
          products with less packaging or purchasing only what we need. Reducing
          our consumption also saves us money and helps us live a more
          minimalist lifestyle.
          <br />
          <br />
          Reuse refers to finding ways to reuse products and materials instead
          of throwing them away. We can reuse items such as glass jars, plastic
          containers, and old clothes by repurposing them for different uses.
          For example, old clothes can be used as rags for cleaning or turned
          into new clothes with a little creativity. By reusing items, we reduce
          the amount of waste we produce and save resources.
          <br />
          <br />
          Recycle refers to the process of converting waste materials into new
          products. Recycling involves collecting, processing, and converting
          materials such as paper, glass, and plastic into new products.
          Recycling reduces the amount of waste sent to landfills and conserves
          natural resources by using recycled materials to make new products.
          <br />
          <br />
          In conclusion, by practicing the three Rs, we can significantly reduce
          the amount of waste we produce and conserve natural resources. We all
          have a responsibility to protect the environment and ensure a
          sustainable future for generations to come. By making conscious
          choices to reduce, reuse, and recycle, we can do our part in
          preserving the planet.
        </p>
      </div>
      <div className="links">
        <GreenButton text="Advices" page="/advices" />
      </div>
    </>
  );
}
