import { Concorrente } from './Concorrente';
import { Cidade } from './../model';

export class Edital {
  id: number;
  ano: number;
  processo: string;
  cidade = new Cidade();
  objeto: string;
  dataAbertura: Date;
  concorrente = new Concorrente();
}
