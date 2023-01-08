import styles from './ImageWrapper.module.sass';

function ImageWrapper({ width, height, children }) {
  const wrapperDims = {
    width: width,
    height: height,
  };

  return (
    <div style={wrapperDims} className={styles.imageContainer}>
      {children}
    </div>
  );
}

export default ImageWrapper;
