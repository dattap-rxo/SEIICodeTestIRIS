import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionDataDisplayComponent } from './subdivision-data-display.component';
import { of } from 'rxjs';
import createSpyObj = jasmine.createSpyObj;
import SpyObj = jasmine.SpyObj;
import { SubDivisionService } from '../service/subdivision-service';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
describe('SubdivisionDataDisplayComponent', () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdivisionDataDisplayComponent ],
      imports: [ HttpClientModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call onSearchChange method', () => {
    const onClickMock = spyOn(component, 'onSearchChange');
    fixture.debugElement.query(By.css('input')).triggerEventHandler('ngModelChange', null);
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should call getSubDivision method', () => {
    let serviceSpy: SpyObj<SubDivisionService>;
    const mockResponse = of([ {
      "id": 26951,
      "code": "001B3",
      "name": "Alexander Park",
      "longitude": -115.07067,
      "latitude": 36.233263,
      "fieldSurveyTerritoryId": 3782,
      "marketId": 16,
      "subdivisionStatusId": 2,
      "surveyMethodId": 2,
      "activeSections": 0,
      "futureSections": 1,
      "builtOutSections": 2,
      "totalLots": 237,
      "fieldSurveyTerritoryName": "EldorBI",
      "marketName": "Las Vegas",
      "marketAbbreviation": "LV",
      "subdivisionStatusCode": "Future",
      "surveyMethodCode": "DRIVE",
      "county": "Clark",
      "community": null,
      "zoom17Date": "2023-08-11T18:20:25.557Z",
      "zoom18Date": "2023-08-11T18:20:25.557Z",
      "subdivisionGeometryId": null,
      "subdivisionGeometryBoundingBoxId": null,
      "subdivisionGeometryBoundaryId": null,
      "subdivisionGeometryIntelligenceBoundaryId": 24714,
      "subdivisionGeometryIntelligenceBoundaryStatusId": 4,
      "subdivisionGeometryIntelligenceBoundaryStatusCode": "Finalized",
      "subdivisionGeometryIntelligenceBoundaryStatusChangeDate": "2022-07-14T04:41:38.403Z",
      "nearMapImageDate": "2023-06-17T18:02:42.000Z",
      "imageBoxId": 59809,
      "mostRecentIPointBatchDate": "2023-07-07T00:00:00.000Z",
      "iPoints": null,
      "validatediPoints": null,
      "subdivisionSpecificStatus": "Future"
    } ]);
    serviceSpy = createSpyObj([ 'getSubDivision' ]);
    serviceSpy.getSubDivision.and.returnValue(mockResponse);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
