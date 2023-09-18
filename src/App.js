import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <form className="form">
          <div className="row">
            <div className="col-9">
              <input type="Search" placeholder="Search" className="input" />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-70" />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-9">
            <h1>London</h1>
          </div>
          <div className="col-1">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt="Scattered Clouds"
              className="img-fluid"
            />
          </div>
          <div className="col-1">
            <h1>20</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-sm-3">
            <h6>Friday, 15:00</h6>
          </div>
          <div className="col-6 col-sm-3">
            <h6>Broken Clouds</h6>
          </div>
          <div class="w-100"></div>
          <div className="col-6 col-sm-3">
            <h6>Humidity: 92%</h6>
          </div>
          <div className="col-6 col-sm-3">
            <h6>Wind: 3.13km/h</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
