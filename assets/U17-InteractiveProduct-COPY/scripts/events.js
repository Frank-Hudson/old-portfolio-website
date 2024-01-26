
const mainContent = document.getElementsByClassName('main-content')[0];

console.log(mainContent.innerHTML);

class HivesEvent {
    constructor(
        location,
        date,
        time
    ) {
        this.location = location;
        this.date = date;
        this.time = time;
    }

    renderOnWebpage() {

        // EVENT ROW DIV
        /* const eventDiv = mainContent.createElement('div');
        eventDiv.classList.add('eventrow'); */
        
        // LOCATION COLUMN DIV
        /* const locationColumn = eventDiv.createElement('div');
        locationColumn.classList.add('eventcolumn');
        locationColumn.style.flex = '30%'; */
        // LOCATION TEXT
        /* const locationText = locationColumn.createElement('p');
        locationText.classList.add('eventlocation');
        locationText.innerText = this.location; */
        
        // DATE COLUMN DIV
        /* const dateColumn = eventDiv.createElement('div');
        dateColumn.classList.add('eventcolumn'); */
        // DATE TEXT
        /* const dateText = dateColumn.createElement('p');
        dateText.classList.add('eventdate');
        dateText.innerText = this.date; */
        
        // TIME COLUMN DIV
        /* const timeColumn = eventDiv.createElement('div');
        timeColumn.classList.add('eventcolumn'); */
        // TIME TEXT
        /* const timeText = timeColumn.createElement('p');
        timeText.classList.add('eventtime');
        timeText.innerText = this.time; */

        // BOOK BUTTON COLUMN DIV
        /* const bookButtonColumn = eventDiv.createElement('div');
        bookButtonColumn.classList.add('eventcolumn');
        bookButtonColumn.style.flex = '20%'; */
        // BOOK BUTTON TEXT
        /* const bookButtonText = bookButtonColumn.createElement('a');
        bookButtonText.classList.add('book-button');
        bookButtonColumn.href = 'booking.html';
        bookButtonText.innerText = 'BOOK'; */
        
        
        mainContent.innerHTML                                                           +=  // START
        '<div class="eventrow">'                                                        +
        '    <div class="eventcolumn" style="flex: 30%;">'                              +
        '        <p class="eventlocation">' + this.location + '</p>'                    +
        '    </div>'                                                                    +
        '    <div class="eventcolumn">'                                                 +
        '        <p class="eventdate">' + this.date + '</p>'                            +
        '    </div>'                                                                    +
        '    <div class="eventcolumn">'                                                 +
        '        <p class="eventtime">' + this.time + '</p>'                            +
        '    </div>'                                                                    +
        '    <div class="eventcolumn" style="flex: 20%;">'                              +
        '        <a target="_self" class="book-button" href="booking.html">BOOK</a>'    +
        '    </div>'                                                                    +
        '</div>'                                                                        +
        '<br />'                                                                        ;   // END
    }
}

const events = [
    new HivesEvent(
        'Lorem Ipsum Stadium',
        '34 / 68 / 5469',
        '45 : 74'
    ),
    new HivesEvent(
        'Ipsum Lorem Stadiox',
        '76 / 68 / 5469',
        '32 : 19'
    ),
    new HivesEvent(
        'Orem Lipsum Stadiir',
        '21 / 69 / 5469',
        '32 : 19'
    ),
    new HivesEvent(
        'Lipsum Orem Stadia',
        '78 / 69 / 5469',
        '08 : 416'
    )
]

function renderEvents() {
    for (let i = 0; i < events.length; i++) {
        events[i].renderOnWebpage();
    }
}
