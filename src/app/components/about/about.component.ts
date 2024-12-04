import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  showBioData: boolean = false;
  bioNumber: any;

  showIndex: boolean[] = [];
  showIndexed(index: number) {
    this.showIndex[index] = !this.showIndex[index];
  }
  showBio(value: number) {
    if (this.bioNumber == value) {
      this.showBioData = !this.showBioData;
      console.log(this.bioNumber, ' -> 1');
    } else {
      this.bioNumber = value;
      this.showBioData = true;
      console.log(this.bioNumber, ' -> 2');
    }
  }
  founders = [
    {
      image: 'https://zerodha.com/static/images/Nikhil.jpg',
      name: 'Nikhil Kamath',
      role: 'Co-founder & CFO',
      bio: 'Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.',
    },
    {
      image: 'https://zerodha.com/static/images/Kailash.jpg',
      name: 'Dr. Kailash Nadh',
      role: 'CTO',
      bio: 'Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.',
    },
    {
      image: 'https://zerodha.com/static/images/Venu.jpg',
      name: 'Venu Madhav',
      role: 'COO',
      bio: 'Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.',
    },
    {
      image: 'https://zerodha.com/static/images/Hanan.jpg',
      name: 'Hanan Delvi',
      role: 'COO',
      bio: 'We take pride in the way we support our clients, and Hanan is responsible for this with his never ending flow of energy. He is the man behind many of our support initiatives that have helped us stay ahead of the game. A free thinker, Hanan can be seen posing as one in his free time.',
    },
    {
      image: 'https://zerodha.com/static/images/Seema.jpg',
      name: 'Seema patil',
      role: 'Director',
      bio: 'Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.',
    },
    {
      image: 'https://zerodha.com/static/images/Austin.jpg',
      name: 'Austin Prakesh',
      role: 'Director Strategy',
      bio: 'Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.',
    },
  ];
}
