import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './initial/login/login.component';
import { RegisterComponent } from './initial/register/register.component';
import { KeyboardComponent } from './util/keyboard/keyboard.component';
import { PaperComponent } from './home/paper/paper.component';
import { AnswerPaperComponent } from './home/paper/answer-paper/answer-paper.component';
import { CreatePaperComponent } from './home/paper/create-paper/create-paper.component';
import { ViewPaperComponent } from './home/paper/view-paper/view-paper.component';
import { QuestionComponent } from './home/question/question.component';
import { AddQuestionComponent } from './home/question/add-question/add-question.component';
import { DeleteQuestionComponent } from './home/question/delete-question/delete-question.component';
import { ViewQuestionComponent } from './home/question/view-question/view-question.component';
import { UserComponent } from './home/user/user.component';
import { AdminComponent } from './home/user/admin/admin.component';
import { SidePanelComponent } from './home/sidePanel/side-panel.component';

import { AngularSplitModule } from 'angular-split';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './home/header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoadingComponent } from './util/loading/loading.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { QuillModule } from 'ngx-quill';
import { ModalModule } from 'ngb-modal';

// AoT requires an exportModalModuleed function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    KeyboardComponent,
    LoadingComponent,
    PaperComponent,
    AnswerPaperComponent,
    CreatePaperComponent,
    ViewPaperComponent,
    QuestionComponent,
    AddQuestionComponent,
    DeleteQuestionComponent,
    ViewQuestionComponent,
    UserComponent,
    AdminComponent,
    SidePanelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    ModalModule,
    QuillModule.forRoot(),
    AngularSplitModule.forRoot(),
    BsDropdownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    BrowserAnimationsModule
  ],
  entryComponents: [
    KeyboardComponent,
    AddQuestionComponent,
    ViewQuestionComponent,
    DeleteQuestionComponent,
    CreatePaperComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class AppModule { }
