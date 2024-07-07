import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { UploadDialogComponent } from './upload-dialog.component'; // Import your custom upload dialog component if created

export interface Section {
  nombre: string;
  descripcion: string;
  updated: Date;
  categoria: string;
  precio: number; // Corrected type from Number to number
  cantidad: number; // Corrected type from Number to number
  selected: boolean;
}

@Component({
  selector: 'app-lists',
  templateUrl: './inventario.component.html',
})
export class InventarioComponent {

  dataSource: Section[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {} // Inject MatDialog here

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<any[]>('http://localhost:8000/api/core/get/list/Producto/')
      .subscribe(
        (data) => {
          this.dataSource = data;
        },
        (error) => {
          console.error('Error fetching products:', error);
          // Handle error if needed
        }
      );
  }

  toggleSelection(folder: Section): void {
    folder.selected = !folder.selected;
  }

  hasSelectedItems(): boolean {
    return this.dataSource.some(folder => folder.selected);
  }

  deleteSelected(): void {
    this.dataSource = this.dataSource.filter(folder => !folder.selected);
    // Implement delete logic here or call a service method to delete from API
  }

  editFolder(folder: Section): void {
    console.log('Editing folder:', folder);
    // Implement your edit functionality here
  }

  openUploadDialog(): void {
    const dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '400px',
      // Add any other dialog configuration options here
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close if needed
      if (result) {
        // If upload was successful or any specific action needed after upload
        console.log('File uploaded successfully:', result);
        // Example: You might want to refresh the product list after upload
        this.getProducts();
      }
    });
  }
}
