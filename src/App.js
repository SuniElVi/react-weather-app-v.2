import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">


        <div className="group">
          <form>
            <input type="Search" placeholder="Search" className="input" />
          </form>
        </div>

        <h1>London</h1>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
          alt="Scattered Clouds"
        />
        <h1>20</h1>
        <h6>Friday, 15:00</h6>
        <h6>Broken Clouds</h6>
        <h6>Humidity: 92%</h6>
        <h6>Wind: 3.13km/h</h6>
      </div>
    </div>
  );
}
