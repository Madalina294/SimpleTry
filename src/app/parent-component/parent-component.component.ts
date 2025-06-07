import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ChildComponentComponent} from '../child-component/child-component.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  imports: [
    ChildComponentComponent,
    FormsModule
  ],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponentComponent {
  nameForParent= '';
  inputValue='';

  sendInput(){
    this.parentNameSig.set(this.inputValue);
  }

  parentNameSig = signal('');
  messageFromChildSig = signal('');

  handleChildUpdate(newMess: string){
    this.messageFromChildSig.set(newMess);
  }

}
