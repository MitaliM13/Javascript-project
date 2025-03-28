const Greetings = ({ timeOfDay }) => {
  return timeOfDay === "Morning" ? (
    <h1>Good Morning!</h1>
  ) : timeOfDay === "Afternoon" ? (
    <h1>Good Afternoon!</h1>
  ) : (
    <h1>Good Night!</h1>
  );
};

export default Greetings;
