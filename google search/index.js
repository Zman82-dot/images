
    const displayTime = () => {

          const currDate = new Date();
          ReactDOM.render(<p>{currDate.toLocaleString()}</p>, document.getElementById('comp1'));

      }
      setInterval(displayTime, 1000)

