import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChotchkiesService } from '../chotchkies.service';

@Component({
  selector: 'app-create-chotchkies',
  templateUrl: './create-chotchkies.component.html',
  styleUrls: ['./create-chotchkies.component.css'],
})
export class CreateChotchkiesComponent implements OnInit {
  chotchkieFormGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private chotchkiesService: ChotchkiesService
  ) {}

  ngOnInit(): void {
    this.chotchkieFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(60)]],
      description: ['', [Validators.required, Validators.maxLength(1024)]],
      price: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100000)],
      ],
      quantityOnHand: [0, [Validators.required, Validators.min(0)]],
    });
  }

  handleSubmit() {
    this.chotchkiesService
      .createChotchkie(this.chotchkieFormGroup.value)
      .subscribe(
        (chotchkie) => {
          console.log(`Saved successfully. ${JSON.stringify(chotchkie)}`);
          this.chotchkieFormGroup.reset({
            name: '',
            description: '',
            price: 0,
            quantityOnHand: 0,
          });
        },
        (error) => {
          alert(error);
        }
      );
  }
}
