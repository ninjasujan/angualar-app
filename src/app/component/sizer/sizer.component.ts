import { DatePipe, UpperCasePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-sizer',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.css',
})
export class SizerComponent {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  groups = [
    { name: 'A', color: 'RED' },
    { name: 'B', color: 'GREEN' },
    { name: 'C', color: 'WHITE' },
  ];

  resize(counter: number) {
    this.size += counter;
    this.sizeChange.emit(this.size);
    console.log('[Event Emit Done]', this.size);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('[App Changes]', changes);
  }
}
