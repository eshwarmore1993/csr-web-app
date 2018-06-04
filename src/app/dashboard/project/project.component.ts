import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    projects = [];
    selectedProject = {};

    constructor(private _authService: AuthService) { }

    ngOnInit() {
        this._authService.getProjects()
            .subscribe((response => {
                this.projects = response.json();
            }));
    }

}
