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
  imports: [],
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.css',
})
export class SizerComponent {
  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  resize(counter: number) {
    this.size += counter;
    this.sizeChange.emit(this.size);
    console.log('[Event Emit Done]', this.size);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('[App Changes]', changes);
  }
}
