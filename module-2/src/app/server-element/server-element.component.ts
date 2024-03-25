import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {}
  ngOnInit() {
    console.log('Text Content: ', this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfeterContent Init called");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfeterContentChecked Init called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Init called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Init called");
    console.log('Text Content: ', this.header.nativeElement.textContent);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
