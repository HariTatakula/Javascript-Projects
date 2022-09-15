const getSleepHours = (day) => {
    day = day.toLowerCase();
    switch (day) {
      case "monday":
        return 8;
      case "tuesday":
        return 7;
      case "wednesday":
        return 6;
      case "thursday":
        return 4;
      case "friday":
        return 6;
      case "saturday":
        return 6;
      case "sunday":
        return 7;
      default:
        return "Error";
    }
  };
  /*console.log(getSleepHours("monday"));
  console.log(getSleepHours("Friday"));
  console.log(getSleepHours("wednesday"));*/
  
  const getActualSleepHours = () =>
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  
  const getIdealSleepHours = () => {
    const idealHours = 9;
    return idealHours * 7;
  };
  //console.log(getActualSleepHours());
  //console.log(getIdealSleepHours());
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("Perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("Sleeping more than needed");
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          " hour(s) less sleep than you needed this week. Get some rest."
      );
    }
  };
  calculateSleepDebt();
  