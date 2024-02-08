import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  
  // Hantera mobil navigation
isMobileNavigationVisible: boolean = false;

toggleMobileNavigation(): void {
  this.isMobileNavigationVisible = !this.isMobileNavigationVisible;
}


}
