import { motion as m } from "framer-motion";
import GreenButton from "../components/GreenButton";

function GetClosest(props) {
  var closest = 0;
  for (let i = 0; i < props.arr.length; i++) {
    if (
      Math.abs(props.value - props.arr[i]) <
      Math.abs(props.value - props.arr[closest])
    ) {
      closest = i;
    }
  }
  return props.arr[closest];
}

function clamp(props) {
  return Math.max(Math.min(props.value, props.max), props.min);
}

function ScrollReveal(p) {
  if (p.element != null) {
    var opacity = `${clamp({
      value:
        Math.cos(
          ((clamp({
            value: p.scrollAmountY - p.center,
            min: -p.duration,
            max: p.duration,
          }) /
            p.duration) *
            Math.PI) /
            2
        ) * 1.7,
      min: 0,
      max: 1,
    })}`;
    p.element.animate(
      {
        opacity: opacity,
      },
      { duration: 1000, fill: "forwards" }
    );
    //p.element.style.transform = `translate(${0}%, ${p.y}%)`;
  }
}

function GetMaxYOffset() {
  // get the height of the entire document
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // get the height of the viewport
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  // calculate the maximum possible pageYOffset value
  const maxPageYOffset = docHeight - viewportHeight;
  return maxPageYOffset;
}

var targetPercentage = -50;
function Animate() {
  const track = document.getElementById("image-track");
  const imageCount = track.getElementsByClassName("image").length;
  var step = 100 / imageCount;

  window.onmouseup = () => {
    if (track == null) return;
    track.setAttribute("data-mouse-down-at", "0");
    if (track.dataset.closest != null) {
      track.setAttribute("data-prev-percentage", track.dataset.closest);
      track.setAttribute("data-percentage", track.dataset.closest);
      targetPercentage = track.dataset.closest;
    }
  };

  window.onmousedown = (e) => {
    if (track == null) return;
    track.setAttribute("data-mouse-down-at", e.clientX);
  };

  const scrollAmountY = (window.pageYOffset * 100) / GetMaxYOffset();
  const images = document.getElementsByClassName("sec_img");
  window.onmousemove = (e) => {
    //sections animation

    const contents = document.getElementsByClassName("sec_content");
    for (let i = 0; i < Math.max(images.length, contents.length); i++) {
      if (images[i] != null) {
        let center = images[i].dataset.center;
        ScrollReveal({
          element: images[i],
          scrollAmountY: scrollAmountY,
          center: center,
          //y: (scrollAmountY - center) / 7 + center,
          duration: 15,
        });
        images[i].firstChild.animate(
          {
            objectPosition: `${clamp({
              value: (e.clientX * 200) / window.innerWidth - 50,
              min: 0,
              max: 100,
            })}% 50%`,
          },
          { duration: 1000, fill: "forwards" }
        );
      }
      if (contents[i] != null) {
        let center = contents[i].dataset.center;
        ScrollReveal({
          element: contents[i],
          scrollAmountY: scrollAmountY,
          center: center,
          //y: (scrollAmountY - center) / 1.8 + center,
          duration: 15,
        });
      }
    }
    if (track == null) return;
    if (track.getAttribute("data-mouse-down-at") === "0") return;

    const mouseDelta =
        parseFloat(track.getAttribute("data-mouse-down-at")) - e.clientX,
      maxDelta = window.innerWidth * 5;

    var percentage = (mouseDelta / maxDelta) * -100,
      nextPercentage =
        parseFloat(track.getAttribute("data-prev-percentage")) + percentage;

    track.setAttribute("data-percentage", nextPercentage);
    let centerArray = [];
    for (let i = 0; i < imageCount; i++) {
      centerArray.push(-step * i - step / 2);
    }
    track.dataset.closest = GetClosest({
      arr: centerArray,
      value: nextPercentage,
    });
    targetPercentage = nextPercentage;

    targetPercentage = clamp({
      value: targetPercentage,
      min: step / 2 - 100,
      max: -step / 2,
    });

    //Track animation
    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${targetPercentage + 100}% 50%`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
    track.animate(
      {
        transform: `translate(${targetPercentage}%, ${-scrollAmountY / 3}%)`,
        opacity: `${clamp({ value: -scrollAmountY / 17 + 1, min: 0, max: 1 })}`,
      },
      { duration: 1200, fill: "forwards" }
    );
  };

  // console.log(scrollAmountY);
  requestAnimationFrame(Animate);
}

export default function Home() {
  window.onload = init;

  function init() {
    Animate();
  }
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className=""
    >
      <header className="banner">
        <div
          id="image-track"
          data-mouse-down-at="0"
          data-prev-percentage="-50"
          data-percentage="-50"
          data-closest="-50"
        >
          <img
            className="image"
            src="src/assets/img_1.jpg"
            alt="image"
            draggable="false"
          />
          <img
            className="image"
            src="src/assets/img_2.jpg"
            alt="image"
            draggable="false"
          />
          <img
            className="image"
            src="src/assets/img_3.jpg"
            alt="image"
            draggable="false"
          />
          <img
            className="image"
            src="src/assets/img_4.jpg"
            alt="image"
            draggable="false"
          />
          <img
            className="image"
            src="src/assets/img_5.jpg"
            alt="image"
            draggable="false"
          />
          <img
            className="image"
            src="src/assets/img_6.jpg"
            alt="image"
            draggable="false"
          />
          <img
            className="image"
            src="src/assets/img_7.jpg"
            alt="image"
            draggable="false"
          />
        </div>
        <div className="content">
          <h1>Inspiring you to live a more sustainable lifestyle</h1>
          <p>
            Welcome to EcoLifestyle, the ultimate destination for all things
            sustainable living! Our website is dedicated to helping you make
            conscious choices that benefit both you and the environment. We
            believe that small changes in our daily lives can have a big impact
            on the planet, and we're here to guide you every step of the way.
            From eco-friendly products to green living tips, we've got you
            covered. Join us in our mission to create a better world for future
            generations by embracing an eco-friendly lifestyle today.
          </p>
          <div>
            <GreenButton text="Get Started" page="/advices" />
          </div>
        </div>
      </header>
      <section className="sec1">
        <div className="container">
          <div className="content sec_content" data-center="20">
            <div className="text-box">
              <h1 className="section-title">Save Energy</h1>
              Reduce your energy consumption by turning off lights and
              electronics when not in use and using energy-efficient appliances
              and light bulbs.
            </div>
            <GreenButton text="How to save energy?" page="/save-energy" />
          </div>
          <div className="image sec_img" data-center="20">
            <img src="src/assets/save_energy.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
          <div className="content sec_content" data-center="35">
            <div className="text-box">
              <h1 className="section-title">Save Water</h1>
              Water is an essential resource that is necessary for all living
              beings. However, due to the increasing population and
              urbanization, water scarcity has become a major issue in many
              parts of the world. Therefore, it is crucial to save water to
              ensure a sustainable future
            </div>
            <GreenButton text="How to save water?" page="/save-water" />
          </div>
          <div className="image sec_img" data-center="35">
            <img src="src/assets/save_water.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="sec3">
        <div className="container">
          <div className="content sec_content" data-center="52">
            <div className="text-box">
              <h1 className="section-title">Reduce, Reuse, and Recycle</h1>
              The three R's are the cornerstone of eco-friendliness. Start by
              reducing the amount of waste you produce, reusing items as much as
              possible, and recycling what you can. For example, you can bring
              your reusable bags to the grocery store, use cloth napkins instead
              of paper ones, and recycle your old electronics.
            </div>
            <GreenButton
              text="How to Reduce, Reuse, and Recycle?"
              page="/reduce-reuse-recycle"
            />
          </div>
          <div className="image sec_img" data-center="52">
            <img src="src/assets/recycle.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="sec4">
        <div className="container">
          <div className="content sec_content" data-center="70">
            <div className="text-box">
              <h1 className="section-title">
                Plant Trees and Support Green Spaces
              </h1>
              Trees and green spaces help to absorb carbon dioxide and reduce
              air pollution. Support local initiatives to plant more trees and
              create green spaces in your community.
            </div>
            <GreenButton text="How to Support Green Spaces?" page="/plant" />
          </div>
          <div className="image sec_img" data-center="70">
            <img src="src/assets/plant.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="sec5">
        <div className="container">
          <div className="content sec_content" data-center="90">
            <div className="text-box">
              <h1 className="section-title">Support Eco-Friendly Businesses</h1>
              Support businesses that prioritize sustainability and
              environmentally friendly practices. Look for companies that use
              renewable energy, source materials sustainably, and have ethical
              supply chains.
            </div>
            <GreenButton
              text="Supporting Eco-Friendly Businesses"
              page="/support"
            />
          </div>
          <div className="image sec_img" data-center="90">
            <img src="src/assets/support.jpg" alt="" />
          </div>
        </div>
      </section>
    </m.div>
  );
}
