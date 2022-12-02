const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function afterEach() {
    return drivers
}

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  };
  
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  };
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
 function createFareMultiplier(multiplyfare) {
    return function (value) {
      return multiplyfare * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = (drivers, returnDrivers) => returnDrivers(drivers);