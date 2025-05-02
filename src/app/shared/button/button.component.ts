import { Component, input, output } from '@angular/core';
import { ButtonTheme } from './button-theme.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  label = input.required();
  disabled = input(false);
  theme = input<ButtonTheme>(ButtonTheme.DARK);

  clicked = output();

  readonly ButtonTheme = ButtonTheme;
}
