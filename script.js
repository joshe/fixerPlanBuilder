window.onload = function () {
  const next1 = document.getElementById('next1');
  const homeSafety = document.getElementById('homeSafety');
  const preventativeMaintenance = document.getElementById('preventativeMaintenance');
  const seasonalMaintenance = document.getElementById('seasonalMaintenance');
  const smartHomeTechnology = document.getElementById('smartHomeTechnology');
  const earthFriendliness = document.getElementById('earthFriendliness');
  const comfortAndShine = document.getElementById('comfortAndShine');
  const kidFriendliness = document.getElementById('kidFriendliness');
  const basicMaintenance = document.getElementById('basicMaintenance');
  const zipcode = document.getElementById('zipcode');
  const email = document.getElementById('email');

  // Add more variables for additional steps as needed

   // Load any existing checkbox values from local storage
  const storedhomeSafety = localStorage.getItem('homeSafety');
  if (storedhomeSafety) {
    homeSafety.checked = (storedhomeSafety === 'true') ? true : false;
  } 
  const storedpreventativeMaintenance = localStorage.getItem('preventativeMaintenance');
  if (storedpreventativeMaintenance) {
    preventativeMaintenance.checked = (preventativeMaintenance === 'true') ? true : false;
  } 
  const storedseasonalMaintenance = localStorage.getItem('seasonalMaintenance');
  if (storedseasonalMaintenance) {
    seasonalMaintenance.checked = (storedseasonalMaintenance === 'true') ? true : false;
  } 
  const storedsmartHomeTechnology = localStorage.getItem('smartHomeTechnology');
  if (storedsmartHomeTechnology) {
    smartHomeTechnology.checked = (storedsmartHomeTechnology === 'true') ? true : false;
  } 
  const storedearthFriendliness = localStorage.getItem('earthFriendliness');
  if (storedearthFriendliness) {
    earthFriendliness.checked = (storedearthFriendliness === 'true') ? true : false;
  } 
  const storedcomfortAndShine = localStorage.getItem('comfortAndShine');
  if (storedcomfortAndShine) {
    comfortAndShine.checked = (storedcomfortAndShine === 'true') ? true : false;
  } 
  const storedkidFriendliness = localStorage.getItem('kidFriendliness');
  if (storedkidFriendliness) {
    kidFriendliness.checked = (storedkidFriendliness === 'true') ? true : false;
  } 
  const storedbasicMaintenance = localStorage.getItem('basicMaintenance');
  if (storedbasicMaintenance) {
    basicMaintenance.checked = (storedbasicMaintenance === 'true') ? true : false;
  } 


  next1.onclick = function () {
    // Save checkbox values to local storage
    localStorage.setItem('homeSafety', homeSafety.checked);
    localStorage.setItem('preventativeMaintenance', preventativeMaintenance.checked);
    localStorage.setItem('seasonalMaintenance', seasonalMaintenance.checked);
    localStorage.setItem('smartHomeTechnology', smartHomeTechnology.checked);
    localStorage.setItem('earthFriendliness', earthFriendliness.checked);
    localStorage.setItem('comfortAndShine', comfortAndShine.checked);
    localStorage.setItem('kidFriendliness', kidFriendliness.checked);
    localStorage.setItem('basicMaintenance', basicMaintenance.checked);

    document.getElementById('step1').style.display = 'none';
    // Display next step, for example: 
    document.getElementById('step2').style.display = 'block';
  };
  // Add more onclick functions for additional steps as needed
  next2.onclick = function () {
    if (!/^\d{5}$/.test(zipcode.value)) {
        alert('Please enter a valid 5-digit zip code.');
        return;
        }
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        alert('Please enter a valid email address.');
        return;
    }

    localStorage.setItem('zipcode', zipcode.value);
    localStorage.setItem('email', email.value);
    const storedZipcode = localStorage.getItem('zipcode')
    const storedEmail = localStorage.getItem('email')

    // alert("Form saved locally. See console for information we'll send to the next page:")
    // console.log("priority1(home safety): " + storedhomeSafety)
    // console.log("priority2(emergency prevention): " + storedpreventativeMaintenance)
    // console.log("priority3(seasonal maintenance): " + storedseasonalMaintenance)
    // console.log("priority4(smart home): " + storedPriority4)
    // console.log("priority5(earth friendly): " + storedPriority5)
    // console.log("priority6(comfort & shine): " + storedPriority6)
    // console.log("priority7(kids & pets): " + storedPriority7)
    // console.log("priority8(basic maintenance): " + storedbasicMaintenance)
    // console.log("zipcode: " + storedZipcode)
    // console.log("email: " + storedEmail)

    window.location.href = './planOutput.html?homeSafety=' +            storedhomeSafety 
                                        + '&preventativeMaintenance=' + storedpreventativeMaintenance
                                        + '&seasonalMaintenance=' +     storedseasonalMaintenance
                                        + '&smartHomeTechnology=' +     storedsmartHomeTechnology
                                        + '&earthFriendliness=' +       storedearthFriendliness
                                        + '&comfortAndShine=' +         storedcomfortAndShine
                                        + '&kidFriendliness=' +         storedkidFriendliness
                                        + '&basicMaintenance=' +        storedbasicMaintenance
                                        + '&zipcode='   +               storedZipcode
                                        + '&email='   +                 storedEmail;

  };
};