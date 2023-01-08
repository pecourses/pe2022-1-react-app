const NamedList = ({ name, children }) => {
  return (
    <>
      <h3>{name}</h3>
      <ul>{children}</ul>
    </>
  );
};

// реалізувати NamedList: іменований список із заголовком з name
// та вмістом списку з контенту NamedList

// Odd numbers: - name
// 1            - контент
// 3            - контент
// 5            - контент

// Проп children дозволяє ділитися версткою і стилями
function App() {
  return (
    <NamedList name="Odd number">
      <li>1</li>
      <li>3</li>
      <li>5</li>
    </NamedList>
  );
}

export default App;
