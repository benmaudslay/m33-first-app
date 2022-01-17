// import Navbar from "./components/navbar"
// import Jumbotron from "./components/jumbo"
// import Footer from "./components/footer"
import "./App.css"
import spiderManPoster from "./spidermanposter.jpeg"

const App = () => {
  return (
    <div>
      {/* <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg" />
      <img src={spiderManPoster} /> */}
      <Job title="Chef" lengthOfTime="1 year" />
      <Job title="Developer" lengthOfTime="3 years" />
      <Job title="Sales" lengthOfTime="10 years" />
    </div>
  )
}

// props = { title: "value", lengthOfTime:  }

const Job = (props) => {
  return (
    <div>
      <h4 className="" id="">
        My job is: {props.title}
      </h4>
      <Time cookie={props.lengthOfTime} />
    </div>
  )
}

// props = { cookie: props.lengthOfTime }

const Time = (props) => {
  return <p>I have worked here for {props.cookie}</p>
}

export default App
