export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={()=>props.greetHandler('Child')}>Greet Parent</button>
    </div>
  );
};
