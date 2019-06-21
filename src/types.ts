import {
  EntityFromIntegration,
  MappedRelationshipFromIntegration,
  RelationshipFromIntegration,
} from "@jupiterone/jupiter-managed-integration-sdk";
import { PersistedObjectAssignable } from "@jupiterone/jupiter-managed-integration-sdk/jupiter-types";

export interface SnykIntegrationInstanceConfig {
  snykApiKey: string;
  snykOrgId: string;
}

export interface ServiceEntity extends EntityFromIntegration {}

/*
export interface CodeRepoEntity extends EntityFromIntegration {
  displayName: string;
  id: string;
  createdOn?: number;
  totalDependencies: number;
  lowVulnerabilities: number;
  mediumVulnerabilities: number;
  highVulnerabilities: number;
  origin: string;
}
*/

export interface FindingEntity extends EntityFromIntegration {
  category: string;
  cvss: number;
  cwe: string[];
  cve: string[];
  description: string;
  displayName: string;
  webLink: string;
  id: string;
  severity: string;
  from: string[];
  package: string;
  version: string;
  language: string;
  packageManager: string;
  isUpgradable: string;
  isPatchable: string;
  publicationTime?: number;
  disclosureTime?: number;
  open: Boolean; //new
  targets: string[]; //new- list of project names associated
  identifiedInFile: string; //new -- package.json, requirements.txt, etc
}

export interface CVEEntity extends PersistedObjectAssignable {
  name: string;
  references: string[];
}

export interface CWEEntity extends PersistedObjectAssignable {
  name: string;
  references: string[];
}

//export type ServiceCodeRepoRelationship = RelationshipFromIntegration;

//export type CodeRepoFindingRelationship = RelationshipFromIntegration;

export type ServiceFindingRelationship = RelationshipFromIntegration; //new

export type FindingVulnerabilityRelationship = MappedRelationshipFromIntegration;

export type FindingCWERelationship = MappedRelationshipFromIntegration;
