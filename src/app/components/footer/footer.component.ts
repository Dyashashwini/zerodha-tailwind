import { Component } from '@angular/core';
import { faFacebook, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  faInsta=faInstagram;
  faFacebook=faFacebook;
  faLinkedIn=faLinkedin;
  faTelegram=faTelegram;
}
