import GreenButton from "../components/GreenButton";

export default function Advices() {
  return (
    <>
      <div className="advices-main">
        <div className="main-title">
          <h1>10 tips for a quick start</h1>
        </div>
        <img src="src/assets/advice.jpg" alt="" />
        <p>
          Living an eco-friendly lifestyle means adopting practices and habits
          that reduce harm to the environment and promote sustainability. If
          you're looking to be more eco-friendly, here is an ultimate guide to
          help you get started:
        </p>
        <img src="src/assets/energy.jpg" alt="" />
        <p>
          1 - Be Mindful of Energy Use: Turn off lights and unplug
          appliancescrane when you're not using them. Use energy-efficient light
          bulbs, and consider investing in smart home technology that can help
          manage your energy consumption.
        </p>
        <img src="src/assets/bus.jpg" alt="" />
        <p>
          2 - Use Sustainable Transportation: Walk, bike, or use public
          transportation instead of driving alone. If you must drive, consider
          purchasing a fuel-efficient or electric vehicle.
        </p>
        <img src="src/assets/water_human.jpg" alt="" />
        <p>
          3 - Reduce Water Usage: Install low-flow showerheads, fix leaks, and
          take shorter showers. Collect rainwater for outdoor use, and water
          your lawn and garden in the early morning or late evening to reduce
          evaporation.
        </p>
        <img src="src/assets/product.jpg" alt="" />
        <p>
          4 - Choose Sustainable Products: Look for products made from
          sustainable materials, such as bamboo or recycled plastic. Choose
          products with minimal packaging, and avoid products with harsh
          chemicals.
        </p>
        <img src="src/assets/img_7.jpg" alt="" />
        <p>
          5 - Support Local and Organic Food: Support local farmers and buy
          organic produce whenever possible. Consider starting a home garden to
          grow your own fruits and vegetables.
        </p>
        <img src="src/assets/img_4.jpg" alt="" />
        <p>
          6 - Reduce Waste: Choose products with minimal packaging, and avoid
          disposable products. Recycle, compost, and reuse as much as possible.
        </p>
        <img src="src/assets/save_water.jpg" alt="" />
        <p>
          7 - Conserve Resources: Turn off the water while brushing your teeth,
          and choose eco-friendly cleaning products. Reduce your paper usage by
          using digital documents whenever possible.
        </p>
        <img src="src/assets/img_1.jpg" alt="" />
        <p>
          8 - Educate Yourself: Learn about the environmental impact of your
          daily habits and make informed decisions. Stay up-to-date on
          environmental news and issues.
        </p>
        <img src="src/assets/support.jpg" alt="" />
        <p>
          9 - Support Environmental Causes: Support organizations that work to
          protect the environment, and participate in community events and
          cleanups.
        </p>
        <img src="src/assets/img_3.jpg" alt="" />
        <p>
          10 - Lead by Example: Be a role model for others by adopting
          eco-friendly habits and sharing your knowledge and experiences with
          others.
        </p>
        <p>
          Remember, living an eco-friendly lifestyle is all about making small
          changes that add up to a big impact. By adopting these habits and
          making conscious choices, you can contribute to a more sustainable
          future for all.
        </p>
      </div>
      <div className="links">
        <GreenButton text="How to save Water?" page="/save-water" />
        <GreenButton text="How to save Energy?" page="/save-energy" />
        <GreenButton
          text="Ecological technologies"
          page="/ecological-technologies"
        />
        <GreenButton
          text="Reduce, Reuse, and Recycle"
          page="/reduce-reuse-recycle"
        />
        <GreenButton
          text="Plant Trees and Support Green Spaces"
          page="/plant"
        />
      </div>
    </>
  );
}
