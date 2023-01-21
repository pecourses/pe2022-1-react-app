import PhonesLoadedList from './components/PhonesLoadedList';

// HOC - компонент вищого порядку (функція, яка приймає і повертає компонент)
function App() {
  return <PhonesLoadedList url="/data/phones.json" />;
}

export default App;
