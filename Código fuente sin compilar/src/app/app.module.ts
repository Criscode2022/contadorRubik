import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoComponent } from "./todo/todo.component";
import { threeComponent } from "./three/three.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { twoComponent } from "./two/two.component";
import { FourComponent } from "./four/four.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { Observable } from "rxjs";
import { HeaderComponent } from "./header/header.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    threeComponent,
    twoComponent,
    FourComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatNativeDateModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatDatepickerModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
