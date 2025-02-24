import "./styles.css";
import "sdk-cl/dist/slider";

export default function App() {
  const sliderChange = (e) => {
    const { value, min, max, step } = e.target;
    console.log("wa", value, min, max, step);
  };

  const css = {
    thumbColor: "#468253",
    barColor: "#76AA84",
    tooltipTextColor: "#fff",
    tooltipBackgroundColor: "#468253",
  };

  return (
    <div className="App">
      <h1>Slider ZSlider</h1>
      <zcl-slider
        min="100"
        max="1000"
        step="50"
        value="300"
        uf="38482.20"
        onchange={(e) => sliderChange(e)}
      ></zcl-slider>

      <br />

      <zcl-slider
        id="slider2"
        min="100"
        max="1000"
        step="50"
        value="500"
        uf="38482.20"
        detailHidden={{ peso: true }}
      ></zcl-slider>

      <br />

      <zcl-slider
        id="slider3"
        min="100"
        max="1000"
        step="50"
        value="700"
        uf="38482.20"
        detailHidden={{ uf: true }}
        disabled
      ></zcl-slider>

      <br />

      <zcl-slider
        id="slider4"
        min="100"
        max="1000"
        step="50"
        value="900"
        uf="38482.20"
        detailHidden={{ uf: true, peso: true }}
      ></zcl-slider>
    </div>
  );
}
