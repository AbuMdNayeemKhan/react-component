const todoTitle = "Start React";
const todoDis ="Today is tarted to learning react js. React js is a free and open-source front-end JavaScript library. Today is tarted to learning react js. React js is a free and open-source front-end JavaScript library. Today is tarted to learning react js. React js is a free and open-source front-end JavaScript library.";
const todoDate = "Nov/3/2022";
const dateText = "Current year is:";
const thisYearName = new Date().getFullYear();
const thisMonthName = new Date().getMonth();
const thisDayName = new Date().getDay();

function Card () {
  return <div class="card">
  <h1 className='card-heading' >{todoTitle}</h1>
  <p className='card-dis'>{todoDis}</p>
  <p className='card-date'>{thisDayName}/{thisMonthName}/{thisYearName}</p>
</div>
}

export default Card;