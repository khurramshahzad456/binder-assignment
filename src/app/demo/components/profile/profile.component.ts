import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

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
    studentOrProfessional = [
        { name: 'Professional', code: 'Professional' },
        { name: 'Student', code: 'Student' },
    ];
    profileForm: FormGroup;

    constructor(
        private _profileService: ProfileService,
        private fb: FormBuilder,
        private _messageService: MessageService
    ) {
        this.showModal$ = this._profileService.showProfileodal$;
        this.initializeForm();
        const profile = JSON.parse(localStorage.getItem('Profile'));
        if (profile) {
            this.profileForm.setValue(profile);
        }
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
            role: ['', [Validators.maxLength(200)]],
        });
    }

    saveProfile() {
        if (this.profileForm.invalid) {
            this._messageService.add({
                severity: 'warning',
                summary: 'Wishlist',
                detail: `Please Fill the Form correctly`,
            });
            return;
        }
        this._messageService.add({
            severity: 'success',
            summary: 'Profile',
            detail: `Your profile has been saved successfully`,
        });
        localStorage.setItem('Profile', JSON.stringify(this.profileForm.value));
    }
}
