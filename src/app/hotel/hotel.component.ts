import {
  Component,
  EventEmitter,
  Input,
  Output,
  numberAttribute,
} from '@angular/core';
import { CardComponent } from '../component/card/card.component';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent {
  @Input({ required: true, transform: numberAttribute }) count = 0;

  @Output() submitHandler = new EventEmitter<void>();

  timerRef: number | null = null;

  clickHotelButton(event: Event) {
    this.count++;
    this.submitHandler.emit();
  }

  ngOnInit() {
    this.timerRef = window.setInterval(() => {
      console.log('[Count]', this.count);
    }, 1000);
    console.log(this.timerRef);
  }
}
