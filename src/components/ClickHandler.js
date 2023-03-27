export const Clicker = () => {
  const clickHere = (event, count = 1) => {
    console.log("Button Clicked", count, event);
  };
  return (
    <div>
      <button onClick={clickHere}>Click Here!</button>
      <button onClick={(event) => clickHere(event, 5)}>Click 5</button>
    </div>
  );
};
