import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    standalone: false,
})
export class ProfileComponent {
    showModal$: Observable<boolean>;
    intrests = [
        { name: 'IT & Sales', code: 'IT' },
        { name: 'Sciences', code: 'sciences' },
        { name: 'Accounting', code: 'accounting' },
        { name: 'HR', code: 'hr' },
        { name: 'Digital Marketing', code: 'DM' },
    ];
    selectedIntrests!: any[];
    profileForm: FormGroup;

    constructor(
        private _profileService: ProfileService,
        private fb: FormBuilder
    ) {
        this.showModal$ = this._profileService.showProfileodal$;
        this.initializeForm();
    }

    closeModal() {
        this._profileService.setProfileModal(false);
    }

    initializeForm() {
        this.profileForm = this.fb.group({
          displayName: ['', [Validators.required]],
          firstName: ['', [Validators.required]],
          lastName: [''],
          aboutYourself: ['', [Validators.maxLength(100)]],
          areaOfInterest: [[]],
        //   studentOrProfessional: ['', [Validators.required]],
        //   experience: [''],
        //   expertise: [''],
          role: ['', [Validators.maxLength(200)]]
        });
      }
}
