import {ChangeDetectionStrategy, Component, effect, input, output, signal} from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponentComponent {
  nameSig = input<string>('');
  nameUpdatedSig = output<string>();

  updatedNameSig = signal('');

  constructor(){
    effect(()=>{
      this.updatedNameSig.set(this.nameSig());
    });
  }

  sendUpdatedName(){
    this.nameUpdatedSig.emit(this.updatedNameSig());
  }
}
