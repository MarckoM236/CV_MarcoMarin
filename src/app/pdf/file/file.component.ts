import { Component, ViewChild, ElementRef,OnInit} from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { ComunService } from '../services/comun.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  
  constructor(private comunService:ComunService){

  }
  ngOnInit() {
    //listen for changes in the value of the service variable btnPdf
    this.comunService.btnPdf.subscribe(data => {
      if(data===true){
        this.generarImagen();
      }
    });

  }
  
  @ViewChild('content',{static:false}) content!: ElementRef;

//generate image from html block
  generarImagen() {
    const elementoHtml = this.content.nativeElement;

    html2canvas(elementoHtml,{
      width: 8.5 * 300, //alto y ancho para tamaño carta
      height: 11 *300,
      scale: 1 // No escalar la imagen
    }).then((canvas: HTMLCanvasElement) => {
      
      const imagen = canvas.toDataURL('image/png');
      this.generatePdf(imagen);
    });
  }
   //receives the image generated in the function generateImagen and converts it to PDF.
    generatePdf(imagen:string):void{
      const pdf = new jsPDF();
      pdf.addImage(imagen, 'PNG', 0, 0, 480, 510); // Add image at position (0, 0) with size 480widthx510length
      pdf.save('CV_MarcoMarin.pdf');
  }

}


