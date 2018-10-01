import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CalculoPage } from '../calculo/calculo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  dibujo = DibujoPage;
  calculo = CalculoPage;

  constructor(public navCtrl: NavController) {

  }
  clickHistoria()
  {
    this.navCtrl.push(this.historia)
  }
  clickDibujo()
  {
    this.navCtrl.push(this.dibujo)
  }
  clickCalculo()
  {
    this.navCtrl.push(this.calculo)
  }
}
