function getDateTime() {
const now = new Date();
const date = now.toLocaleDateString();
const time = now.toLocaleTimeString();

const datetime = `
 <div class="datetime">
<p class="date">${date}</p>
<h4>,</h4>
<p class="time">${time}</p>
</div>
 `;
 
return datetime;
}
const datetimeElement = document.querySelector('.datetime');
datetimeElement.parentNode.removeChild(datetimeElement);
    
const datetimeFragmentHTML = getDateTime();
const bodyElement = document.querySelector('body');
bodyElement.innerHTML += datetimeFragmentHTML;
    
