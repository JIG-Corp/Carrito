import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
})
export class UploadDialogComponent {

  constructor(public dialogRef: MatDialogRef<UploadDialogComponent>) {}

  onFileSelected(event: any): void {
    // Handle file selection logic here (e.g., upload file to server)
    const file: File = event.target.files[0];
    console.log('Archivo seleccionado:', file);
    // Example: You might want to upload the file using HttpClient
    // Add your upload logic here based on your backend API requirements
    // You can call an API endpoint to handle the file upload

    // Close the dialog and pass any result if needed
    this.dialogRef.close('Archivo subido correctamente');
  }

  onCancelClick(): void {
    // Handle cancel button click if needed
    this.dialogRef.close(); // Close the dialog without any result
  }
}
