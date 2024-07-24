import GreenButton from "../components/GreenButton";

export default function SaveWater() {
  return (
    <>
      <div className="advices-main">
        <h1 className="main-title">How to Save Water?</h1>
        <img src="src/assets/save_water.jpg" alt="" />
        <p>
          Water is an essential resource that is necessary for all living
          beings. However, due to the increasing population and urbanization,
          water scarcity has become a major issue in many parts of the world.
          Therefore, it is crucial to save water to ensure a sustainable future.
          Here are some ways you can save water: <br />
          <br />1 - Fix leaks: Check your plumbing and fix any leaks promptly.
          Even small leaks can waste a lot of water over time. <br />
          <br /> 2 - Install water-efficient fixtures: Install low-flow
          showerheads, faucets, and toilets to reduce water usage. <br />
          <br /> 3 - Water plants efficiently: Water your plants during the
          early morning or late evening when the temperature is cooler, to
          minimize evaporation. Use drip irrigation or a watering can instead of
          a hose, as it saves water and delivers water directly to the plants.{" "}
          <br />
          <br /> 4 - Use a broom: Instead of hosing down your driveway or
          sidewalk, use a broom to clean it. <br />
          <br /> 5 - Install a rain barrel: Collect rainwater in a barrel and
          use it for watering plants or washing your car. <br />
          <br /> 6 - Shorten your showers: Take shorter showers to reduce the
          amount of water you use. <br />
          <br /> 7 - Turn off the tap: Turn off the tap when brushing your teeth
          or shaving, as it can save up to 6 liters of water per minute. <br />
          <br />
          8 - Use a dishwasher and washing machine efficiently: Only run your
          dishwasher and washing machine when you have a full load. <br />
          <br /> 9 - Fix outdoor leaks: Check for leaks in outdoor hoses, taps,
          and irrigation systems, and fix them immediately. <br />
          <br /> 10 - Educate others: Educate your family and friends about the
          importance of water conservation and encourage them to adopt
          water-saving practices.
          <br />
          <br /> By implementing these simple steps, you can save a significant
          amount of water and contribute to a sustainable future.
        </p>
      </div>
      <div className="links">
        <GreenButton text="Advices" page="/advices" />
      </div>
    </>
  );
}
