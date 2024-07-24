import GreenButton from "../components/GreenButton";

export default function SaveEnergy() {
  return (
    <>
      <div className="advices-main">
        <h1 className="main-title">How to Save Energy?</h1>
        <img src="src/assets/energy.jpg" alt="" />
        <p>
          1 - Turn off lights and electronics when not in use.
          <br /> 2 - Use energy-efficient appliances and light bulbs. <br /> 3 -
          Seal air leaks around doors and windows.
          <br /> 4 Adjust your thermostat to conserve heating and cooling.{" "}
          <br /> 5 - Unplug chargers and appliances when not in use. <br /> 6 -
          Use natural light and ventilation when possible. <br /> 7 - Keep your
          HVAC system well-maintained.
          <br />
          8 - Wash clothes in cold water and line dry. <br /> 9 - Use a
          programmable thermostat to control energy usage.
          <br /> 10 - Use power strips to turn off multiple devices at once.
        </p>
      </div>
      <div className="links">
        <GreenButton text="Advices" page="/advices" />
      </div>
    </>
  );
}
