"use strict"

function MyFirstComponent() {
  return <h1>My very first component</h1>
}

function NamedComponent(prop) {
  return <p>My name is {prop.name}</p>
}

function App(){
  return (
    <div>
    <MyFirstComponent />
    <NamedComponent name="Jon Snehw" />
    <NamedComponent name="Igraine" />
  </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
)



root.render(<App />);