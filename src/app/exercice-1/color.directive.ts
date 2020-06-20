import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener } from "@angular/core"


// j'init mon selector html
@Directive({
  selector: '[color]'
})
export class ColorDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // j'applique un style.color sur la ma variable couleur
  @HostBinding('style.color') couleur : string;

  // j'écoute chaque evenements
  // par exemple ici j'écoute au keyup de la arrow up, j'applique couleur = green
  @HostListener('window:keyup.arrowup', ['$event'])
  handleKeyArrowUp(event: KeyboardEvent) {
    this.couleur = "green"
  }

  @HostListener('window:keyup.arrowdown', ['$event'])
  handleKeyArrowDown(event: KeyboardEvent) {
    this.couleur = "purple"
  }

  @HostListener('window:keyup.arrowright', ['$event'])
  handleKeyArrowRight(event: KeyboardEvent) {
    this.couleur = "blue"
  }

  @HostListener('window:keyup.arrowleft', ['$event'])
  handleKeyArrowLeft(event: KeyboardEvent) {
    this.couleur = "red"
  }
  
  // à l'init de mon template, j'utilise le renderer2 d'angular core avec le set style et native element de ElementRef en passant en parametre 'color' et ma var couleur qui contiens les valeurs aux evenemt des fleches du clavier
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.couleur)
  }
}