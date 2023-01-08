import FlexContainer from './components/FlexContainer';
import ImageWrapper from './components/ImageWrapper/index';

function App() {
  return (
    <FlexContainer>
      <ImageWrapper width="400px" height="300px">
        <img
          src="https://images.pexels.com/photos/11046405/pexels-photo-11046405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="home"
        />
      </ImageWrapper>
    </FlexContainer>
  );
}

export default App;
