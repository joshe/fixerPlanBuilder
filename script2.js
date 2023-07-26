window.onload = function () {
    const zipcode = localStorage.getItem('zipcode')
    const email = localStorage.getItem('email')
    const homeSafety = localStorage.getItem('homeSafety')
    const preventativeMaintenance = localStorage.getItem('preventativeMaintenance')
    const seasonalMaintenance = localStorage.getItem('seasonalMaintenance')
    const smartHomeTechnology = localStorage.getItem('smartHomeTechnology')
    const earthFriendliness = localStorage.getItem('earthFriendliness')
    const comfortAndShine = localStorage.getItem('comfortAndShine')
    const kidFriendliness = localStorage.getItem('kidFriendliness')
    const basicMaintenance = localStorage.getItem('basicMaintenance')

    console.log("priority1(home safety): " + homeSafety)
    console.log("priority2(emergency prevention): " + preventativeMaintenance)
    console.log("priority3(seasonal maintenance): " + seasonalMaintenance)
    console.log("priority4(smart home): " + smartHomeTechnology)
    console.log("priority5(earth friendly): " + earthFriendliness)
    console.log("priority6(comfort & shine): " + comfortAndShine)
    console.log("priority7(kids & pets): " + kidFriendliness)
    console.log("priority8(basic maintenance): " + basicMaintenance)
    console.log("zipcode: " + zipcode)
    console.log("email: " + email)

    if(homeSafety === 'true'){
        const homeSafetyElements = document.querySelectorAll('.homeSafety');
        homeSafetyElements.forEach(element => element.style.display = 'block');
    }
    if(preventativeMaintenance === 'true'){
        const preventativeMaintenanceElements = document.querySelectorAll('.preventativeMaintenance');
        preventativeMaintenanceElements.forEach(element => element.style.display = 'block');
    }
    if(seasonalMaintenance === 'true'){
        const seasonalMaintenanceElements = document.querySelectorAll('.seasonalMaintenance');
        seasonalMaintenanceElements.forEach(element => element.style.display = 'block');
    }
    if(smartHomeTechnology === 'true'){
        const smartHomeTechnologyElements = document.querySelectorAll('.smartHomeTechnology');
        smartHomeTechnologyElements.forEach(element => element.style.display = 'block');
    }
    if(earthFriendliness === 'true'){
        const earthFriendlinessElements = document.querySelectorAll('.earthFriendliness');
        earthFriendlinessElements.forEach(element => element.style.display = 'block');
    }
    if(comfortAndShine === 'true'){
        const comfortAndShineElements = document.querySelectorAll('.comfortAndShine');
        comfortAndShineElements.forEach(element => element.style.display = 'block');
    }
    if(kidFriendliness === 'true'){
        const kidFriendlinessElements = document.querySelectorAll('.kidFriendliness');
        kidFriendlinessElements.forEach(element => element.style.display = 'block');
    }
    if(basicMaintenance === 'true'){
        const basicMaintenanceElements = document.querySelectorAll('.basicMaintenance');
        basicMaintenanceElements.forEach(element => element.style.display = 'block');
    }

};