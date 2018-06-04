import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {
    MatCardModule, MatButtonModule, MatIconModule,
    MatChipsModule, MatGridListModule, MatExpansionModule,
    MatDividerModule, MatListModule, MatInputModule, MatOptionModule,
    MatSelectModule, MatToolbarModule
} from '@angular/material';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import {
    CovalentMediaModule, CovalentMessageModule, CovalentLoadingModule
} from '@covalent/core';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule, MatChipsModule, MatGridListModule,
        MatExpansionModule, MatDividerModule, MatListModule,
        CovalentMediaModule, CovalentMessageModule, CovalentLoadingModule,
        MatInputModule, FormsModule, ReactiveFormsModule, MatOptionModule,
        MatSelectModule, MatToolbarModule
    ],
    declarations: [DashboardComponent, PipelineComponent, ProfileComponent,
        ProjectComponent, CreateProjectComponent],
    providers: [AuthService]
})
export class DashboardModule { }
