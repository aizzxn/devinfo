import { QueryResult } from "pg";

export interface Project {
  id: number;
  name: string;
  description: string;
  estimatedTime: string;
  repository: string;
  startDate: Date;
  endDate?: Date;
  developerId: number;
}

export interface iProjectTech extends Project {
    technologyName: string;
}

export type ProjectResult = QueryResult<iProjectTech>

export interface ProjectTechnology {
  id: number;
  addedIn: Date;
  projectId: number;
  technologyId: number;
}

export interface Technology {
  id: number;
  name: string;
}
