import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }

  // @HostListener('document:click', ['$event'])
  // onClick(event: MouseEvent): void {
  //   const clickedElement = event.target as HTMLElement;
  //   console.log(this.isNavbarClick(clickedElement));
  //   if (
  //     !this.elementRef.nativeElement.contains(clickedElement) &&
  //     !this.isNavbarClick(clickedElement)
  //   ) {
  //     this.open = false;
  //   }
  // }

  // private isNavbarClick(clickedElement: HTMLElement): boolean {
  //   // Check if the clicked element or any of its ancestors have the 'navbar' class
  //   return (
  //     clickedElement.classList.contains('navbar') ||
  //     !!clickedElement.closest('.navbar')
  //   );
  // }

  open: boolean = false;
  showPopup() {
    this.open = !this.open;
  }

  preventClose(event: MouseEvent) {
    event.stopPropagation();
  }
}
