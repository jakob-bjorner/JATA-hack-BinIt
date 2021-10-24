import React from "react";

const BinItAbout = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About</h1>
      <h2>The BinIt App</h2>
      <p>
        The BinIt App is a web application that allows users to track their
        waste and recycle bins.
      </p>
      <p>
        It's a sweltering day in Atlanta, and you just finished drinking your
        plastic water bottle. You desperately search for a recycling bin but
        can't seem to find one anywhere in sight. Running late to your
        hackathon, you pull out Bin It to see where the closest recycling bins
        are and where they lie on your route. As you approach your destination,
        you are happy to pin a new recycling bin for others to see. You skip
        away to your hackathon, happy to be promoting more sustainable habits in
        a user-friendly manner. Behavioral economics demonstrates that
        convenience is a major factor in the decisions of people. By providing
        convenience we nudge people into recycling more, and ultimately increase
        the amount of recycling done and reduce the wastage of materials.
        However, more importantly we hope to make people kinder to the Earth
        while having fun with it. Our goal isn’t something radical such as
        solving climate change, but it cultivates deep and authentic care for
        the environment in people, all while being convenient.
      </p>

      <h2>The BinIt Dev Team</h2>
      <p>
        This react app demonstrates a hackathon's learning process of four
        individuals.
      </p>
      <p>
        Built with React and Firebase, our time was spent on the following:
        <ul style={{ listStyleType: "None" }}>
          <li>24 hrs on a login page which we abandoned.</li>
          <li>30 hrs on google maps api which was used!</li>
          <li>20 hrs on the firebase database which was used!</li>
          <li>10 hrs of sleep</li>
          <li>3 hrs of idea generation</li>
        </ul>
      </p>
    </div>
  );
};

export default BinItAbout;
