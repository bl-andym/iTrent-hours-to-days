(() => {
    if (window.location.href.indexOf("ce0752li.webitrent.com") > -1) {
        let e = document.getElementsByClassName("EssHolidayGauge-availableValue"),
            t = document.getElementsByClassName("hrsToDays"),
            l = document.getElementsByClassName("EssHolidayGauge-availableDesc");
        if (e.length > 0) {
            for (let n = 0; n < e.length; n++) {
                let o = parseFloat(e[n].innerText);
                let s = Math.floor(o / 7.2),
                    a = Math.round((o / 7.2 - s) * 60);
                if (t.length === 0) {
                    let i = document.createElement("span");
                    i.className = "hrsToDays";
                    i.textContent = s < 2 ? `days: ${s}, m: ${a}` : `d: ${s}, m: ${a}`;
                    i.style.cssText = "display: flex; flex-direction: row; flex-wrap: nowrap; align-content: center; justify-content: center";
                    l[0].insertAdjacentElement("afterend", i);

                    let y = document.getElementById("EssHolidayGauge-link");
                    if (y) {
                        let d = getComputedStyle(y).borderColor;
                        y.style.transition = "border-color 0.4s";
                        y.style.borderColor = "red";
                        setTimeout(() => { y.style.borderColor = d; }, 400);
                    }
                }
            }
        } else {
            // console.error('Could not find any elements.');
        }
    } else {
        // console.error('This script is only operational on URLs containing mySite.com.');
    }
})();
