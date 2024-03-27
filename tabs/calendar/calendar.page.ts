import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  
  constructor() {

  }


  ngOnInit() {
  }

  highlightedDates = [
    {
      date: '2023-04-06',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-04-07',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-04-08',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-04-09',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-05-01',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-06-01',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-02',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-03',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-08',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-09',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-12',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-06-13',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-14',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-15',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-16',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-06-17',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
  ];

  selectedDateEvent: string = '';

  showEvent(event: any) {
    const selectedDate = new Date(event.detail.value);

    const events: {[key: string]: string} = {
      '2023-04-06': 'Holiday: Maundy Thursday',
      '2023-04-07': 'Holiday: Good Friday',
      '2023-04-08': 'Holiday: Black Saturday',
      '2023-04-09': 'Holiday: Araw ng Kagitingan',
      '2023-05-01': 'Holiday: Labor Day',
      '2023-06-01': 'Final Examination (Graduating)',
      '2023-06-02': 'Final Examination (Graduating)',
      '2023-06-03': 'Final Examination (Graduating)',
      '2023-06-08': 'Final Examination',
      '2023-06-09': 'Final Examination',
      '2023-06-10': 'Final Examination',
      '2023-06-12': 'Holiday: Independence Day',
      '2023-06-13': 'Completion Period',
      '2023-06-14': 'Completion Period',
      '2023-06-15': 'Encoding of Final Grades',
      '2023-06-16': 'Encoding of Final Grades',
      '2023-06-17': 'Encoding of Final Grades',
    };
    this.selectedDateEvent = events[selectedDate.toISOString().substring (0, 10)] || 'No school events for this date';
  }

}
