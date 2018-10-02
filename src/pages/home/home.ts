import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CalculoPage } from '../calculo/calculo';
import { PappsPage } from '../papps/papps';
import { ComPage } from '../com/com';
import { PyEPage } from '../py-e/py-e';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  historia = HistoriaPage;
  dibujo = DibujoPage;
  calculo = CalculoPage;
  papps = PappsPage;
  com = ComPage;
  pye = PyEPage;

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
  clickPapps()
  {
    this.navCtrl.push(this.papps)
  }
  clickCom()
  {
    this.navCtrl.push(this.com)
  }
  clickPye()
  {
    this.navCtrl.push(this.pye)
  }
}
