import { Component } from '@angular/core';
import { ProfileService } from '../../service/profile/profile.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    standalone: false,
})
export class ProfileComponent {
    showModal$: Observable<boolean>;
    constructor(private _profileService: ProfileService) {
        this.showModal$ = this._profileService.showProfileodal$;
    }

    closeModal() {
        this._profileService.setProfileModal(false);
    }
}
