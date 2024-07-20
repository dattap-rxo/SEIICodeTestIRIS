import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { SubDivisionService } from '../service/subdivision-service';
import { SubdivisionList, Subdivisions } from '../model/response';

@Component({
  selector: 'app-subdivision-data-display',
  templateUrl: './subdivision-data-display.component.html',
  styleUrls: [ './subdivision-data-display.component.css' ]
})
export class SubdivisionDataDisplayComponent implements AfterViewInit {

  displayedColumns: string[] = [ 'name', 'marketName', 'country', 'nearMapImageDate', 'subdivisionStatusCode' ];
  dataSource: any;
  searchText: string;
  subDivisionList: Subdivisions[];
  filteredList: Subdivisions[];
  subDivision: string;
  subDivisionFilter: any[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private http: HttpClient, private subDivisionService: SubDivisionService) {
    this.subDivisionFilter = [ { id: 'active', value: 'Active' }, { id: 'future', value: 'Future' }, { id: 'builtout', value: 'Builtout' } ];
  }
  ngAfterViewInit() {
    this.subDivisionService.getSubDivision().subscribe((data: SubdivisionList) => {
      if (data?.subdivisions) {
        this.subDivisionList = data?.subdivisions;
        this.filteredList = [ ...this.subDivisionList ];
        this.dataSource = new MatTableDataSource<Subdivisions>(this.filteredList);
        this.dataSource.paginator = this.paginator;
      } else {
        this.dataSource = new MatTableDataSource<Subdivisions>([]);
      }
    });
  }

  onSearchChange(searchValue: any) {
    if (searchValue == '') {
      this.filteredList = this.subDivisionList;
      this.dataSource = new MatTableDataSource<Subdivisions>(this.filteredList);
      this.dataSource.paginator = this.paginator;
    } else {
      this.filteredList = this.subDivisionList.filter((element: any) => {
        return element.name.toLowerCase() == searchValue.toLowerCase();
      });
      this.dataSource = new MatTableDataSource<Subdivisions>(this.filteredList);
      this.dataSource.paginator = this.paginator;
    }
  }

  filterList(filterValue: any) {
    console.log('filterValue', this.subDivision)
    this.filteredList = this.subDivisionList.filter((element: any) => {
      return element.subdivisionStatusCode.toLowerCase() == this.subDivision.toLowerCase();
    });
    this.dataSource = new MatTableDataSource<Subdivisions>(this.filteredList);
    this.dataSource.paginator = this.paginator;
  }

}
