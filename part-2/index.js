"use strict";

function Tweet({ username, atUser, date, msg }) {
  const styles = {};

  return (
    <div>
      <h3>{username} - {date}</h3>
      <p>@{atUser}, {msg}</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Tweet
        username="Frodo"
        atUser="Aragorn"
        date="23rd Forelithe"
        msg="Could really go for a pint right now"
      />
      <Tweet
        username="Frodo"
        atUser="Samwise"
        date="21st Blotmath"
        msg="How's the garden?"
      />
      <Tweet
        username="Pippin"
        atUser="Merry"
        date="3rd Solmath"
        msg="You haven't been in farmer maggot's crops 'ave you?"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<App />);