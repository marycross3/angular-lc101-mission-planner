import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  ExperimentsList:string []= ["Mars soil sample","Plant growth in habitat", "Human bone density"]
  experimentBeingEdited:string = null;

  constructor() { }

  ngOnInit() {
  }

  add(experiment: string){
    this.ExperimentsList.push(experiment);
  }

  edit(newExperiment: string){
    this.experimentBeingEdited = newExperiment;
  }

  save(experiment: string){
    this.ExperimentsList[this.ExperimentsList.indexOf(this.experimentBeingEdited)] = experiment;
    this.experimentBeingEdited = null;
  }

  remove(experiment: string){
    let index = this.ExperimentsList.indexOf(experiment);
    this.ExperimentsList.splice(index, 1);
  }

}
