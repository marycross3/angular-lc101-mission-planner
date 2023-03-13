import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  equipmentList: string[] =['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks']
  equipmentBeingEdited: string = null;

  constructor() { }

  ngOnInit() {
  }

  addEquipment(equipment: string){
    this.equipmentList.push(equipment);
  }

  editEquipment(stuff: string){
    this.equipmentBeingEdited = stuff;

  }

  saveEquipment(equipment: string){
    this.equipmentList[this.equipmentList.indexOf(this.equipmentBeingEdited)] = equipment;
    this.equipmentBeingEdited = null;

  }

  removeEquipment(equipment: string){
    let index = this.equipmentList.indexOf(equipment);
    this.equipmentList.splice(index, 1);
  }
}
