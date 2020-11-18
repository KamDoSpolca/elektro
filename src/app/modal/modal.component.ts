import { Component, OnInit } from '@angular/core';

//import { ModalService } from '../angular-modal-services';


@Component({
  selector: 'elektro-products',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  title = 'elektro';

 // constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    //this.modalService.open(id);
  }

  closeModal(id: string) {
  //  this.modalService.close(id);
  }
}


