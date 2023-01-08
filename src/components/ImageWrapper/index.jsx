import styles from './ImageWrapper.module.sass';

// проброс пропсов
function ImageWrapper({ width, height, children, ...restProps }) {
  const wrapperDims = {
    width, // width: width
    height, // height: height
  };

  return (
    <div {...restProps} style={wrapperDims} className={styles.imageContainer}>
      {children}
    </div>
  );
}

export default ImageWrapper;
