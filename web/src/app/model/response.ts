export interface SubdivisionList {
  subdivisions: Subdivisions[];
}

export interface Subdivisions {
  id: number;
  code: string;
  name: string;
  longitude: number;
  latitude: number;
  fieldSurveyTerritoryId: number;
  marketId: number;
  subdivisionStatusId: number;
  surveyMethodId: number;
  activeSections: number;
  futureSections: number;
  builtOutSections: number;
  totalLots: number;
  fieldSurveyTerritoryName: string;
  marketName: string;
  marketAbbreviation: string;
  subdivisionStatusCode: string;
  surveyMethodCode: string;
  county: string;
  community: string;
  zoom17Date: string;
  zoom18Date: string;
  subdivisionGeometryId: number;
  subdivisionGeometryBoundingBoxId: number;
  subdivisionGeometryBoundaryId: number;
  subdivisionGeometryIntelligenceBoundaryId: number;
  subdivisionGeometryIntelligenceBoundaryStatusId: number;
  subdivisionGeometryIntelligenceBoundaryStatusCode: number;
  subdivisionGeometryIntelligenceBoundaryStatusChangeDate: string;
  nearMapImageDate: string;
  imageBoxId: number;
  mostRecentIPointBatchDate: string;
  iPoints: number;
  validatediPoints: number;
  subdivisionSpecificStatus: string;
}