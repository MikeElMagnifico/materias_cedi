import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { CalculoPage } from '../calculo/calculo';
import { PappsPage } from '../papps/papps';
import { ComPage } from '../com/com';
import { PyEPage } from '../py-e/py-e';
import { RoboticaPage } from '../robotica/robotica';
import { CPage } from '../c/c';
import { MiPage } from '../mi/mi';

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
  robo = RoboticaPage;
  cs = CPage;
  mi = MiPage;

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
  clickRobo()
  {
    this.navCtrl.push(this.robo)
  }
  clickCS()
  {
    this.navCtrl.push(this.cs)
  }
  clickMI()
  {
    this.navCtrl.push(this.mi)
  }
}
