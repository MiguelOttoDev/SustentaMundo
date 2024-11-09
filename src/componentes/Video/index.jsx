const VideoPlayer = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Vídeo</h1>
        <div style={styles.videoWrapper}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ehQPUXWTah0?si=_S2tdYbkdXhZxPmj" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.iframe}
          ></iframe>
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      marginTop:'30px'
    },
    videoWrapper: {
        width: '100%',
        maxWidth: '700px',
        aspectRatio: '1', 
        position: 'relative',
        marginTop:'30px'
      },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  };
  
  export default VideoPlayer;