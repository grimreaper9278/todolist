import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {

  @Output() sendText = new EventEmitter()
  getText!: string

  handleText(event: any){
    this.getText = event.target.value
  } 

  sendEvent(){
    this.sendText.emit(this.getText)
  }

}
